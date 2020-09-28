export function cropImage(image64, pixelCrop) {
  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width * 2;
  canvas.height = pixelCrop.height * 2;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = image64;
  ctx.drawImage(
    image,
    pixelCrop.x * 2,
    pixelCrop.y * 2,
    pixelCrop.width * 2,
    pixelCrop.height * 2,
    0,
    0,
    pixelCrop.width * 2,
    pixelCrop.height * 2
  );
  // image.download = "snap-" + video.currentTime + ".png";
  const url = canvas.toDataURL("image/jpeg", 1.0);
  console.log(url);
  return url;
}
