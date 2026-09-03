# ------------------------------------------------------------------
# SSD Sirius — image Docker multi-stage pour Google Cloud Run
# Build reproductible sur la sortie Next.js "standalone".
# ------------------------------------------------------------------

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- deps : installe uniquement les dépendances ----
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ---- builder : build de l'application ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Les NEXT_PUBLIC_* nécessaires au build peuvent être passés en --build-arg
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_SITE_URL
RUN npm run build

# ---- runner : image finale minimale ----
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Cloud Run injecte PORT ; on écoute sur 8080 par défaut
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 8080
CMD ["node", "server.js"]
