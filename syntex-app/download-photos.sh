#!/usr/bin/env bash
# Syntex — fetch real (non-AI) industrial photos for the slideshow. Run from project root: bash download-photos.sh
set -e; DIR="public/images"; mkdir -p "$DIR"; UA="Mozilla/5.0"
dl(){ curl -sL -m 40 -A "$UA" -o "$DIR/$1" "$2" && echo "OK  $1" || echo "FAILED $1 — see PHOTO-MANIFEST.md"; }
dl datacentre.jpg      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&fm=jpg"
dl network-cabling.jpg "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=1920&q=80&fm=jpg"
dl server-room.jpg     "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80&fm=jpg"
echo "Done. Run: npm run dev"
