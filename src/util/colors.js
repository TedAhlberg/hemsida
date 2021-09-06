const setAccentColors = () => {
  const rgbConstSub = [80, 80, 80]

  for (let i = 0; i < 3; i++) {
    let rgbString = getCSSVariable('--bg-color' + (i + 1))
    let rgbArray = rgbStringToArray(rgbString)

    for (let j = 0; j < 3; j++) {
      rgbArray[j] = rgbArray[j] - rgbConstSub[j]
    }

    rgbString = rgbArrayToString(rgbArray)
    setCSSVariable('--a-color' + (i + 1), rgbString)
  }
}

const rgbStringToArray = (string) => {
  return string
    .substring(4, string.length - 1)
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

exports.setAccentColors = setAccentColors