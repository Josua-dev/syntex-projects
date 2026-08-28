# Slideshow photos
Included (your real assets): office-wide.jpg, office-windhoek.jpg, syntex-mark.png, favicon.png.
The slideshow also uses 3 real (non-AI) photos. Get them automatically:
  Windows:  powershell -ExecutionPolicy Bypass -File download-photos.ps1
  Mac/Linux: bash download-photos.sh
Manual (Pexels, free, no attribution) if a download fails — save with these names into public/images/:
  datacentre.jpg      → https://www.pexels.com/photo/server-racks-on-data-center-5480781/
  network-cabling.jpg → https://www.pexels.com/photo/cables-connected-on-server-2881229/
  server-room.jpg     → https://www.pexels.com/photo/ethernet-cables-plugged-on-a-server-rack-1054397/
Missing images fall back to a branded slide automatically — the site works immediately with just the office photo.
