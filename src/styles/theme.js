// colors are in HSL or HSLA array format:
// [hue, saturation, luminosity] or...
// [hue, saturation, luminosity, alpha]

const baseTheme = {
  palette: {
    greyscale: {
      black: [0, 0, 8],
      white: [0, 0, 94]
    }
  },
  spacing: {
    unit: 1
  }
};

baseTheme.spacing.multiple = num => `${num * baseTheme.spacing.unit}rem`;

export const lightTheme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: baseTheme.palette.greyscale.white,
    text: {
      ...baseTheme.text,
      primary: [...baseTheme.palette.greyscale.black, 1],
      secondary: [...baseTheme.palette.greyscale.black, 0.8]
    }
  }
};

export const darkTheme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    background: baseTheme.palette.greyscale.black,
    text: {
      ...baseTheme.text,
      primary: [...baseTheme.palette.greyscale.white, 1],
      secondary: [...baseTheme.palette.greyscale.white, 0.8]
    }
  }
};
