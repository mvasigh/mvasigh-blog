// colors are in HSL or HSLA array format:
// [hue, saturation, luminosity] or...
// [hue, saturation, luminosity, alpha]

const theme = {
  palette: {
    greyscale: {
      black: [0, 0, 15],
      white: [0, 0, 98]
    }
  }
};

theme.palette.background = theme.palette.greyscale.black;
theme.palette.text = {
  primary: [...theme.palette.greyscale.white, 1],
  secondary: [...theme.palette.greyscale.white, 0.8]
};

export default theme;
