// colors are in HSL or HSLA array format:
// [hue, saturation, luminosity] or...
// [hue, saturation, luminosity, alpha]

const theme = {
  palette: {
    greyscale: {
      black: [0, 0, 8],
      white: [0, 0, 98]
    }
  },
  spacing: {
    unit: 1
  }
};

theme.palette.background = theme.palette.greyscale.white;
theme.palette.text = {
  primary: [...theme.palette.greyscale.black, 1],
  secondary: [...theme.palette.greyscale.black, 0.8]
};
theme.spacing.multiple = num => `${num * theme.spacing.unit}rem`;

export default theme;
