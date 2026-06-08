#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RELEASE_DIR="$ROOT_DIR/release"
VIEWER_DIR="$RELEASE_DIR/viewer"
ZIP_PATH="$RELEASE_DIR/ai-zangle-clean-demo-view.zip"

rm -rf "$VIEWER_DIR"
mkdir -p "$VIEWER_DIR/assets" "$RELEASE_DIR"

cp "$ROOT_DIR/index.html" "$VIEWER_DIR/"
cp "$ROOT_DIR/styles.css" "$VIEWER_DIR/"
cp "$ROOT_DIR/script.js" "$VIEWER_DIR/"
cp "$ROOT_DIR/CHANGELOG.md" "$VIEWER_DIR/"
cp "$ROOT_DIR/VERSION.json" "$VIEWER_DIR/"

rsync -a --exclude ".DS_Store" "$ROOT_DIR/assets/" "$VIEWER_DIR/assets/"

cat > "$VIEWER_DIR/README.txt" <<'README'
打开方式：
1. 解压 ai-zangle-clean-demo-view.zip
2. 进入 viewer 文件夹
3. 双击 index.html 直接观看

这个观看包只包含静态页面和展示素材，不包含 Git 历史、开发依赖、lockfile 或 macOS .DS_Store 文件。
README

find "$VIEWER_DIR" -name ".DS_Store" -delete
rm -f "$ZIP_PATH"

(
  cd "$RELEASE_DIR"
  zip -qr "$ZIP_PATH" "viewer"
)

echo "Created: $ZIP_PATH"
du -h "$ZIP_PATH"
