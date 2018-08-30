const rem = function (value) {
  var photoWidth = 750;
  var num = (parseInt(value, 10) / photoWidth * 10).toFixed(6)
  return `${num}rem`;
}

export default rem