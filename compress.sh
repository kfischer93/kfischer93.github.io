#!/bin/bash
for img in galleryimages/*.jpg galleryimages/*.jpeg galleryimages/*.JPG galleryimages/*.JPEG galleryimages/*.png galleryimages/*.PNG designfiles/*.jpg designfiles/*.jpeg designfiles/*.JPG designfiles/*.JPEG designfiles/*.png designfiles/*.PNG; do
  [ -f "$img" ] || continue
  name="${img%.*}"
  [ -f "${name}.webp" ] && continue
  convert "$img" -resize "1800x1800>" -quality 82 "${name}.webp"
  echo "Done: ${name}.webp"
done
echo "All finished!"
