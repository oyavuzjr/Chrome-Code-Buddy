export function cropImage(image64, pixelCrop, {factorWidth, factorHeight}) {
  // Todo Remove console log

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = pixelCrop.width * factorWidth;
  canvas.height = pixelCrop.height * factorHeight;
  const image = new Image();
  image.src = image64;
  ctx.drawImage(
    image,
    pixelCrop.x * factorHeight,
    pixelCrop.y * factorWidth,
    pixelCrop.width * factorWidth,
    pixelCrop.height * factorHeight,
    0,
    0,
    pixelCrop.width * factorWidth,
    pixelCrop.height * factorHeight
  );
  // image.download = "snap-" + video.currentTime + ".png";
  const url = canvas.toDataURL("image/jpeg", 1.0);
  console.log(url);
  return url;
}
