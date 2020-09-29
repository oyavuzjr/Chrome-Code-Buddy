export function thresholdBinarize(ctx, c) {

    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    console.log(imgData.data)
    var d = imgData.data;
    // threshold

    var threshold = 60

    var i;
    for (i = 0; i < d.length; i+=4) {
        var r = d[i];
        var g = d[i+1];
        var b = d[i+2];
        var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
        d[i] = d[i+1] = d[i+2] = v
    }
    ctx.putImageData(imgData, 0, 0);
    const url = c.toDataURL("image/jpeg", 1.0)
    return url;
}