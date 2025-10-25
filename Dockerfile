# Tahap 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Tahap 2: Production
FROM node:20-alpine AS runner
WORKDIR /app

# Copy output dan node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# User non-root
RUN adduser --system --uid 1001 nextjs
USER nextjs

ENV PORT 3000
EXPOSE 3000

# Next.js standalone mode
CMD ["node", "server.js"]