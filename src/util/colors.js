var bgColors = require('./../assets/data/bgColors.json').colors

const setColors = () => {
  setBgColors()
  setAccentColors()
}

const setBgColors = () => {
  let max = bgColors.length
  let rand1 = Math.floor(Math.random() * max)
  let rand2 = Math.floor(Math.random() * max)

  if (rand1 == rand2) rand2++
  if (rand2 > max - 1) rand2 = 0

  let color1 = rgbArrayToString(bgColors[rand1])
  let color2 = rgbArrayToString(bgColors[rand2])

  setCSSVariable('--bg-color1', color1)
  setCSSVariable('--bg-color2', color2)
}

const setAccentColors = () => {
  const rgbConstSub = [80, 80, 80]

  let rgbArray1 = rgbStringToArray(getCSSVariable('--bg-color1'))
  let rgbArray2 = rgbStringToArray(getCSSVariable('--bg-color2'))

  for (let i = 0; i < 3; i++) {
    rgbArray1[i] = rgbArray1[i] - rgbConstSub[i]
    rgbArray2[i] = rgbArray2[i] - rgbConstSub[i]
  }

  let rgbString1 = rgbArrayToString(rgbArray1)
  let rgbString2 = rgbArrayToString(rgbArray2)

  setCSSVariable('--a-color1', rgbString1)
  setCSSVariable('--a-color2', rgbString2)
}

const rgbStringToArray = (string) => {
  return string
    .substring(4, string.length - 2)
    .replace(/ /g, '')
    .split(',')
}

const rgbArrayToString = (array) => {
  return 'rgb(' +
    array[0] + ', ' +
    array[1] + ', ' +
    array[2] + ') '
}

const getCSSVariable = (string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(string)
}

const setCSSVariable = (string, value) => {
  document.documentElement.style.setProperty(string, value)
}

module.exports = { setColors }