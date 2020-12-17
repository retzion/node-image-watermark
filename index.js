const gm = require("gm")
const request = require("request")

module.exports = function (options) {
  let {
    geometry = "10,10",
    imageUrl,
    resize = "800,450",
    watermarkPath,
  } = options
  if (!imageUrl || !watermarkPath) return

  geometry = geometry.split(",")
  imageUrl = decodeURIComponent(imageUrl)
  resize = resize.split(",")

  return gm(request.get(imageUrl))
    .resize(...resize)
    .composite(watermarkPath)
    .geometry(`+${geometry[0]}+${geometry[1]}`)
    .stream()
}
