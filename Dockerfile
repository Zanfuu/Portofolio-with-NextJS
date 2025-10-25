# ===================================================================
# STAGE 1: BUILDER
# Bertanggung jawab menginstal SEMUA dependensi (termasuk dev) dan menjalankan build
# ===================================================================
FROM node:20-alpine AS builder

# Atur WORKDIR
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package.json package-lock.json ./

# KRITIS: Instal SEMUA dependensi (devDependencies dan dependencies)
# agar 'typescript' dan tools build lainnya tersedia untuk 'npm run build'.
RUN npm ci

# Salin semua kode sumber
COPY . .

# Jalankan build Next.js (output akan menjadi folder 'standalone' yang siap pakai)
RUN npm run build


# ===================================================================
# STAGE 2: PRODUCTION RUNNER
# Memuat output standalone yang ringan dan bersih
# ===================================================================
FROM node:20-alpine AS runner

# Buat direktori aplikasi
WORKDIR /app

# Salin folder standalone (semua yang dibutuhkan Next.js untuk berjalan)
COPY --from=builder /app/.next/standalone ./
# Salin folder static (.next/static harus di luar folder standalone)
COPY --from=builder /app/.next/static ./.next/static
# Salin folder public (aset statis)
COPY --from=builder /app/public ./public


# User non-root untuk keamanan (Sangat bagus! Keep it up, calon DevOps!)
RUN adduser --system --uid 1001 nextjs
USER nextjs

ENV PORT 3000
EXPOSE 3000

# Next.js standalone mode: menjalankan server.js yang sudah dibuat
CMD ["node", "server.js"]
```
---