
/**
 * Sets theme's palette type
 * 
 * @function
 * @param {string} type - Type to set
 * @returns {object}
 */
export const setPaletteType = (type = 'light') => {
  return (dispatch) => {
    dispatch({
      type: 'THEME_PALETTE_TYPE_SET',
      payload: type
    })
  }
}