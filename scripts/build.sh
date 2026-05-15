#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR/assets"

cp "$ROOT_DIR/index.html" "$DIST_DIR/index.html"
cp "$ROOT_DIR/src/main.js" "$DIST_DIR/assets/main.js"
cp "$ROOT_DIR/src/style.css" "$DIST_DIR/assets/style.css"

# Rewire built index references to assets path.
sed -i 's|/src/main.js|./assets/main.js|g' "$DIST_DIR/index.html"

echo "Build complete: $DIST_DIR"
