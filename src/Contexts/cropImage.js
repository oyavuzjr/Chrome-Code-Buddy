export function cropImage (image64, pixelCrop) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.src = image64
    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height)
    // image.download = "snap-" + video.currentTime + ".png";
    const url = canvas.toDataURL("image/jpeg", 1.0);
    console.log(url)
    return url

  }