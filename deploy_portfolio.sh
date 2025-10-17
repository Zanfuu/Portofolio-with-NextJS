#!/bin/bash

# Pastikan Anda sudah login ke Docker Registry (jika menggunakan private registry)
# docker login -u <username> -p <token>

APP_NAME="zanfuu"
IMAGE_NAME="zanfuu/portofolio:$BUILD_NUMBER" # Gunakan $BUILD_NUMBER dari Jenkins
CONTAINER_PORT=3000

echo "Langkah 1: Membuat Image Docker baru: $IMAGE_NAME"
# Mengarahkan Jenkins untuk membangun image dari Dockerfile di lokasi proyek yang dicloning
docker build -t $IMAGE_NAME .

echo "Langkah 2: Menghentikan dan menghapus container lama (jika ada)"
# Opsi: gunakan --force jika container tidak mau mati.
docker stop $APP_NAME || true
docker rm $APP_NAME || true

echo "Langkah 3: Menjalankan container baru"
# Jalankan container baru dan hubungkan ke network 'web'
docker run -d \
  --name $APP_NAME \
  --restart always \
  -p $CONTAINER_PORT:$CONTAINER_PORT \
  --network web \
  $IMAGE_NAME

echo "Deployment berhasil. Container baru $APP_NAME berjalan di port $CONTAINER_PORT pada network 'web'."