# Syntex — fetch real (non-AI) industrial photos for the slideshow.
# Run from project root:  powershell -ExecutionPolicy Bypass -File download-photos.ps1
$dir="public\images"; New-Item -ItemType Directory -Force -Path $dir | Out-Null
$items=@(
 @{f="datacentre.jpg";u="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&fm=jpg"},
 @{f="network-cabling.jpg";u="https://images.unsplash.com/photo-1591405351990-4726e331f141?w=1920&q=80&fm=jpg"},
 @{f="server-room.jpg";u="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80&fm=jpg"}
)
foreach($i in $items){ try{ Invoke-WebRequest -Uri $i.u -OutFile (Join-Path $dir $i.f) -UseBasicParsing -Headers @{"User-Agent"="Mozilla/5.0"}; Write-Host "OK  $($i.f)" }catch{ Write-Host "FAILED $($i.f) — open PHOTO-MANIFEST.md" } }
Write-Host "Done. Run: npm run dev"
