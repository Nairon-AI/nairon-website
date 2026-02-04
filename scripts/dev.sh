#!/bin/bash

# Full dev startup script for Turborepo + Bun monorepo
# Finds an available port, installs dependencies if needed, and starts all services

find_available_port() {
  local port=$1
  while lsof -i :"$port" >/dev/null 2>&1; do
    echo "Port $port is in use, trying next..."
    port=$((port + 1))
  done
  echo "$port"
}

PORT=$(find_available_port 3001)
export PORT

echo "Using port: $PORT"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "node_modules not found, running bun install..."
  bun install
fi

echo "Starting dev server on port $PORT..."
bun run dev
