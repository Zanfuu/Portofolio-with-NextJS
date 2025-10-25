#!/bin/bash

# Script deployment untuk VPS
# Pastikan Docker dan Docker Compose sudah terinstall di VPS

set -e

echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin master

# Build dan start container
echo "🔨 Building and starting containers..."
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Clean up unused images
echo "🧹 Cleaning up unused images..."
docker image prune -f

# Check if container is running
echo "✅ Checking container status..."
sleep 10
if docker-compose ps | grep -q "Up"; then
    echo "🎉 Deployment successful! Application is running."
    docker-compose ps
else
    echo "❌ Deployment failed! Check logs:"
    docker-compose logs
    exit 1
fi

echo "🌐 Application should be available at: http://43.129.55.182:3000"
