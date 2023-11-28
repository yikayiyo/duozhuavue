module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'is-active': 'rgb(51,51,51)',
        'back-to': '#666666f5',
        'search-input': '#f7f7f7',
        'add-to-cart': '#c75943',
        douban: '#f7f7f799',
        dbr: 'rgb(214, 186, 140)',
        label: 'rgb(242, 129, 129)',
        'menu-active': '#18c3aa',
        menu: '#f2f2f2',
        load: 'rgb(73, 119, 73)',
        'load-more': 'rgba(73, 119, 73, 0.08)',
        'sold-out': 'rgb(170,170,170)',
        rating: '#e6e6e6',
        'oc-item': 'rgb(238, 238, 238)',
        'oc-top': 'rgb(203, 150, 37)',
        'oc-middle': 'rgba(203, 150, 37, 0.3)',
        'oc-bottom': 'rgba(203, 150, 37, 0.8)',
        divider: '#aaaaaa1a',
        splitter: '#ffffff80',
        info: '#fff9',
        arrow: '#18c3aa',
        disable: '#497749',
        layer: 'rgba(0,0,0,0.3)',
        darkbg: '#15181c',
        darkborder: '#2f3336',
        emphasis: 'rgb(199,89,67)',
        'emphasis-soft': 'rgba(199,89,67,0.06)'
      },
      backgroundImage: (theme) => ({
        kindle: "url('/src/assets/electronics/kindle.png')",
        elh: "url('/src/assets/electronics/entry_level_headphone_v2.png')",
        sh: "url('/src/assets/electronics/sports_headphone_v2.png')",
        nch: "url('/src/assets/electronics/noise_canceling_headphone_v2.png')",
        hrh: "url('/src/assets/electronics/high_resolution_headphone_v2.png')",
        switch: "url('/src/assets/electronics/switch.png')",
        ps: "url('/src/assets/electronics/playstation.png')",
        xbox: "url('/src/assets/electronics/xbox.png')",
        swc: "url('/src/assets/electronics/switch_cartridge.png')"
      }),
      backgroundSize: {
        '60%': '60%'
      },
      boxShadow: {
        'book-list-item-image': 'rgb(0 0 0 / 10%) 0px 0px 8px 0px'
      },
      width: {
        0.25: '1px',
        hicon: '1.4em',
        7.5: '30px',
        11.25: '45px',
        11.5: '46px',
        20: '80px',
        21: '84px',
        22.5: '90px',
        23: '92px',
        27.5: '110px',
        'oc-item': '132px',
        33.75: '135px',
        37.5: '150px',
        qr: '200px',
        '50%': '50%'
      },
      lineHeight: {
        hsh: '1.1',
        'search-input': '24px',
        category: '1.4',
        1.5: '1.5',
        1.56: '1.56',
        1.6: '1.6',
        1.69: '1.69',
        1.8: '1.8'
      },
      minWidth: {
        4: '16px',
        0: '0px'
      },
      inset: {
        '-1': '-1px',
        '-50': '-50px',
        ct: '67px',
        45: '180px'
      },
      letterSpacing: {
        'brand-gender': '2px'
      },
      borderRadius: {
        menu: '19px',
        '50%': '50%',
        99: '99px',
        load: '2px',
        'oc-item': '5px'
      },
      flex: {
        2: '2 2 0%',
        5: '5 5 0%'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      2: '2px'
    },
    maxWidth: {
      dzy: '600px',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      elc: '95px',
      oc: '200px'
    },
    minWidth: {
      '1/2': '50%'
    },
    height: {
      0.5: '2px',
      4.75: '19px',
      5: '20px',
      5.5: '22px',
      7.5: '30px',
      10: '40px',
      11: '44px',
      11.25: '45px',
      11.5: '46px',
      12: '3rem',
      12.5: '50px',
      13: '52px',
      16: '64px',
      20: '80px',
      30: '7.5rem',
      32: '128px',
      32.5: '130px',
      39: '156px',
      50: '200px',
      86: '21.5rem',
      full: '100%',
      screen: '100vh',
      auto: 'auto',
      hicon: '1.4em',
      'oc-item': '178px',
      qr: '200px',
      '9em': '9em'
    },
    maxHeight: {
      30: '7.5rem',
      '7.2em': '7.2em',
      full: '100%'
    },
    lineHeight: {
      'oc-title': '1.44',
      'extra-loose': '2.5',
      cbl: '0.91',
      4.75: '19px'
    },
    fontSize: {
      xss: '10px',
      cbl: '11px',
      xs: '.75rem',
      hsh: '13px',
      footer: '14px',
      sm: '.875rem',
      shiwu: '15px',
      base: '1rem',
      elc: '17px',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      service: '22px',
      'brand-gender': '28px'
    },
    margin: {
      'bk-list-item-title': '-0.1em',
      'oc-title': '1.5px',
      0: '0',
      0.75: '3px',
      '-1': '-4px',
      1: '4px',
      1.25: '5px',
      1.5: '6px',
      1.75: '7px',
      2: '8px',
      2.25: '9px',
      2.5: '10px',
      2.625: '10.5px',
      3: '12px',
      '-3': '-12px',
      3.5: '14px',
      3.75: '15px',
      '-3.75': '-15px',
      4: '16px',
      4.25: '17px',
      4.5: '18px',
      5: '20px',
      6.25: '25px',
      6.75: '27px',
      7.5: '30px',
      8: '32px',
      8.75: '35px',
      12.5: '50px',
      20: '80px',
      '-8.75': '-35px',
      auto: 'auto',
      '1.6em': '1.6em',
      '-5%': '-5%'
    },
    padding: {
      1: '4px',
      '0.8em': '0.8em',
      '1em': '1em',
      1.25: '5px',
      1.5: '6px',
      1.875: '7.5px',
      2: '8px',
      2.25: '9px',
      2.5: '10px',
      3: '12px',
      3.25: '13px',
      3.75: '15px',
      4: '1rem',
      4.5: '18px',
      4.75: '19px',
      5: '20px',
      5.5: '22px',
      6: '24px',
      6.25: '25px',
      6.5: '26px',
      7: '28px',
      7.5: '30px',
      8: '32px',
      8.5: '34px',
      8.75: '35px',
      9: '36px',
      9.5: '38px',
      12: '3rem',
      12.75: '51px',
      15: '60px',
      16.5: '66px',
      50: '200px',
      '5%': '5%',
      auto: 'auto'
    },
    zIndex: {
      0: 0,
      1: 1,
      10: 10,
      20: 20,
      50: 50
    }
  },
  variants: {
    extend: {
      margin: ['last']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
