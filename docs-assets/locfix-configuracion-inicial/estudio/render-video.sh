#!/usr/bin/env bash
# Build the LocFix install animatic from the studio frames.
set -euo pipefail
cd "$(dirname "$0")"
rm -f seg*.mp4
specs=("instalacion-poster:3" "01-inicio:7" "02-bloque-validacion:8" "04-autocompletado:7" "05-key-servidor:9" "07-mapa:8" "03-sugerencias:7" "08-checkout:8" "portada:5")
i=0
for spec in "${specs[@]}"; do
  n=${spec%%:*}; d=${spec##*:}; frames=$((d * 30))
  ffmpeg -loglevel error -y -loop 1 -i "frames/${n}.png" \
    -vf "scale=3200:2000,zoompan=z='min(1+0.0005*on,1.07)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=1600x1000:fps=30,format=yuv420p" \
    -frames:v "${frames}" -c:v libx264 -crf 20 -preset medium "seg${i}.mp4"
  durs[$i]=$d; i=$((i + 1))
done
# Chain crossfades (0.6 s) between segments.
fade=0.6; inputs=(); filter=""; offset=0; prev="0:v"
for ((k = 0; k < i; k++)); do inputs+=(-i "seg${k}.mp4"); done
for ((k = 1; k < i; k++)); do
  offset=$(python3 -c "print(round(${offset} + ${durs[$((k - 1))]} - ${fade}, 2))")
  out="v${k}"; filter+="[${prev}][${k}:v]xfade=transition=fade:duration=${fade}:offset=${offset}[${out}];"; prev="${out}"
done
ffmpeg -loglevel error -y "${inputs[@]}" -filter_complex "${filter%;}" -map "[${prev}]" \
  -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart -r 30 instalacion.mp4
ffprobe -v error -show_entries format=duration,size -of default=nw=1 instalacion.mp4
