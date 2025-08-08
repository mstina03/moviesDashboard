#!/bin/bash

# CONFIG: update these paths as needed
FRONTEND_DIR="movies-frontend"
DOCS_DIR="docs"

echo "🚀 Starting deployment to GitHub Pages..."

# Step 1: Navigate to frontend
if [ ! -d "$FRONTEND_DIR" ]; then
  echo "❌ Frontend directory '$FRONTEND_DIR' not found."
  exit 1
fi

cd "$FRONTEND_DIR"

# Step 2: Build the frontend
echo "🏗️  Running production build..."
npm run build || { echo "❌ Build failed"; exit 1; }

cd ..

# Step 3: Remove old docs folder if it exists
if [ -d "$DOCS_DIR" ]; then
  echo "🧹 Removing old docs folder..."
  rm -rf "$DOCS_DIR"
fi

# Step 4: Move build to docs
echo "📁 Moving build/ to docs/"
mv "$FRONTEND_DIR/build" "$DOCS_DIR"

echo "✅ Deployment ready! Commit and push 'docs/' to publish on GitHub Pages."
