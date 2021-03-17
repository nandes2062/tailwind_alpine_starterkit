/**
 * imagesResize
 * Resize all JPG images to three different sizes: 200, 500, and 630 pixels
 */
const imagesResize = {
  // '*.{jpg,png,jpeg,gif,webp}': [{
  //   width: 100,
  //   suffix: '-100'
  // }, {
  //   width: 100 * 2,
  //   suffix: '-100-2x'
  // }],
  'candidatos-y-partidos/*.{jpg,png,jpeg,gif,webp}': [{
    crop: true,
    width: 100,
    height: 100,
    upscale: true,
    suffix: ''
  }]
};

module.exports = imagesResize;