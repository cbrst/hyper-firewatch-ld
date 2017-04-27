const palette = {
  m1: "#abb2bf",
  m2: "#828997",
  m3: "#5c6370",

  h1: "#56b6c2",
  h2: {
    dark: "#ebebff",
    light: "#17a0b5"
  },
  h3: {
    red: "#dd672c",
    green: "#5ba473",
  },
  h4: {
    red: "#c8ae9d",
    green: "#c8ae9d",
  },
  h5: {
    red:   "#e06c75",
    green:   "#2d6248",
  },
  h5_2: {
    red: "#be5046",
    green: "#77b181",
  },
  h6: {
    red:   "#d19a66",
    green:   "#e5c07b",
  },
  h6_2: {
    red: "#e5c07b",
    green: "#d19a66",
  },

  bg: {
    dark:  "#282c34",
    light: "#fff",
  },
  scrollbar: {
    dark:  "#636d83",
    light: "#eee",
  },
  border: {
    dark:  "#abb2bf",
    light: "#f5f5f5"
  }
}

module.exports = config => {
  const themeShade = config.firewatch.shade || 'dark';
  const themeHue   = config.firewatch.hue   || 'red';

  const colors = {
    red:     palette.h5_2[themeHue],
    green:   palette.h4[themeHue],
    yellow:  palette.h6_2[themeHue],
    blue:    palette.h2[themeShade],
    magenta: palette.h3[themeHue],
    cyan:    palette.h1,
    white:   palette.m2,
    black:   palette.m3,

    lightRed:     palette.h5[themeHue],
    lightGreen:   palette.h4[themeHue],
    lightYellow:  palette.h6[themeHue],
    lightBlue:    palette.h2[themeShade],
    lightMagenta: palette.h3[themeHue],
    lightCyan:    palette.h1,
    lightWhite:   palette.m1,
    lightBlack:   palette.m2,
  };

  return {
    backgroundColor: palette.bg[themeShade],
    foregroundColor: palette.m1,
    borderColor:     palette.border[themeShade],
    colors:          colors,
    termCSS: `
    ${config.termCSS || ''}
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${palette.scrollbar[themeShade]};
    }
    `,
    css: `
    ${config.css || ''}
    .hyper_main {
      border: 0 !important;
    }

    .header_header {
      top: 0;
      left: 0;
      right: 0;
    }

    .tabs_borderShim {
      display: none !important;
    }

    .tabs_nav > .tabs_title {
      color: ${palette.m1};
      width: 100%;
      height: 100%;
      background-color: ${palette.bg[themeShade]} !important;
    }

    .tabs_list {
      margin-left: 0;
    }

    .tab_tab {
      color: ${palette.m2} !important;
      border: 0 !important;
      padding-left: 0 !important;
    }

    .tab_active {
      color: ${palette.m1};
      height: calc(100% + 1px);
    }

    .tabs_list .tab_active {
      background-color: ${palette.bg[themeShade]} !important;
    }

    .tab_text {
      color: ${palette.m1};
      border: 0 !important;
      opacity: 0.5;
    }

    .tab_active .tab_text {
      opacity: 1;
    }

    .hyper_main {
      border: none !important;
    }

    .term_active {
      background-color: ${palette.bg[themeShade]};
    }
    `
  }
}
