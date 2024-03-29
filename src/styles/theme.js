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
    brand: {
      lightSalmon: [17, 100, 74],
      mintCream: [15, 100, 98],
      paleGreen: [120, 92.5, 79],
      lighterSalmon: [21, 95, 85],
      darkGrey: [198, 30, 18],
      lightGrey: [24, 22, 95]
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

baseTheme.spacing.multiple = num => `${num * baseTheme.spacing.unit}em`;

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
    background: baseTheme.palette.brand.darkGrey,
    text: {
      ...baseTheme.text,
      primary: [...baseTheme.palette.brand.lightGrey, 1],
      secondary: [...baseTheme.palette.brand.mintCream, 0.7]
    }
  }
};
