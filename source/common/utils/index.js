function mediaQuery (value, changeSize) {
  const mediumBp = window.matchMedia(value)
  mediumBp.addListener(changeSize)
  changeSize(mediumBp)
}

export default mediaQuery
