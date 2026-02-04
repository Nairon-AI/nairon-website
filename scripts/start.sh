#!/bin/bash

# Simpler web-only dev server
# Finds an available port and starts the web app

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
echo "Starting web dev server on port $PORT..."
bun run dev:web
