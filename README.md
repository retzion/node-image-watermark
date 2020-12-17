# node-image-watermark
[![npm version](https://badge.fury.io/js/node-image-watermark.svg)](https://badge.fury.io/js/node-image-watermark)
[![Issues](https://img.shields.io/github/issues/retzion/node-image-watermark)](https://github.com/retzion/node-image-watermark/issues)
![Forks](https://img.shields.io/github/forks/retzion/node-image-watermark)
![Stars](https://img.shields.io/github/stars/retzion/node-image-watermark)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

1. Install [GraphicMagick](http://www.graphicsmagick.org/) on your machine (or a buildpack on your server)
2. Install the NPM module<br />`npm i node-image-watermark`
4. Import the module 
```
const watermark = require("node-image-watermark")
```
4. Set your params according to your requirements:
```
app.get("/img/:imageUrl", (req, res) => {
  const { imageUrl } = req.params
  if (!imageUrl) res.sendStatus(404)

  res.set("Content-Type", "image/png")
  watermark({
    geometry: "45,45",
    resize: "1600,900",
    watermarkPath: "./watermark.png",
  }).pipe(res)
})
```

<br /><br />
Params:

Pass `geometry`, `resize`, and `watermarkPath` as options properties in order to customize the image.

- `resize`: String representation of a tuple of X, Y dimensions for resizing the base image (ex: `"800,450"`)

- `geometry`: String representation of a tuple of X, Y coordinates for where to place the watermark  (ex: `"30,30"`)

- `watermarkPath`: Local path to a watermark image file (ex: `./watermark.png`)



<br /><br /><hr />

<i>resources:</i>

Heroku Buildpack: https://elements.heroku.com/buildpacks/xerpa/heroku-buildpack-graphicsmagick