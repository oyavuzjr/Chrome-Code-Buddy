export function cropImage(image64, pixelCrop, factor) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  console.log(factor)
  canvas.width = pixelCrop.width * factor["factorWidth"];
  canvas.height = pixelCrop.height * factor["factorHeight"];
  const image = new Image();
  image.src = image64;
  ctx.drawImage(
    image,
    pixelCrop.x * factor["factorHeight"],
    pixelCrop.y * factor["factorWidth"],
    pixelCrop.width * factor["factorWidth"],
    pixelCrop.height * factor["factorHeight"],
    0,
    0,
    pixelCrop.width * factor["factorWidth"],
    pixelCrop.height * factor["factorHeight"]
  );
  // image.download = "snap-" + video.currentTime + ".png";
  const url = canvas.toDataURL("image/jpeg", 1.0);
  console.log(url);
  return url;
}
