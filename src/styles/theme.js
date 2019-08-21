// colors are in HSL or HSLA array format:
// [hue, saturation, luminosity] or...
// [hue, saturation, luminosity, alpha]

const baseTheme = {
  palette: {
    greyscale: {
      black: [0, 0, 8],
      darkGrey: [0, 0, 15],
      lightGrey: [0, 0, 86],
      white: [0, 0, 94]
    },
    code: {
      background: [220, 21, 16],
      string: [85, 68, 70],
      tag: [190, 73, 63],
      variable: [190, 73, 63],
      method: [40, 100, 75],
      comment: [211, 11, 41],
      keyword: [31, 100, 67]
    }
  },
  spacing: {
    unit: 1
  }
};

baseTheme.spacing.multiple = num => `${num * baseTheme.spacing.unit}rem`;

export const lightTheme = {
  ...baseTheme,
  type: 'light',
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
  type: 'dark',
  palette: {
    ...baseTheme.palette,
    background: baseTheme.palette.greyscale.black,
    text: {
      ...baseTheme.text,
      primary: [...baseTheme.palette.greyscale.white, 1],
      secondary: [...baseTheme.palette.greyscale.white, 0.7]
    }
  }
};
