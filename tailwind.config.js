/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.html', './layout/**/*.ejs', './main.js'],
  theme: {
    extend: {
      fontSize: {
        '60': ['3.75rem', {
          lineHeight: '1.2',
          fontWeight: '700',
        }],
        'search': ['1rem', {
          lineHeight: '1.2',
          fontWeight: '400',
        }],
        'xs': ['0.75rem', {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '400',
        }],
        'sm': ['0.875rem', {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '400',
        }],
        'base': ['1rem', {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '400',
        }],
        'sub-title-sm': ['0.875rem', {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        'title-base': ['1rem', {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        'xl': ['1.25rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '2xl': ['1.5rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '3xl': ['1.75rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '4xl': ['2rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '5xl': ['2.5rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '6xl': ['3rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '7xl': ['4.5rem', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
      },
      colors: {
        primary: {
          10: '#F3EEEC',
          40: '#CBB6AF', 
          60: '#A37F71',
          80: '#886658',
          100: '#4A3830',
          120: '#2B211C'
        },
        success: {
          10: '#F0FCD1',
          20: '#DDFAA5',
          100: '#7CD31F',
          120: '#48970F'
        },
        info: {
          10: '#D4F9FE',
          20: '#A9EFFE',
          100: '#2AAFFC',
          120: '#1566B5'
        },
        alert: {
          10: '#FFE0D7',
          20: '#FFBBB0',
          100: '#FF3A55',
          120: '#B71D4F'
        },
        black: {
          10: '#F9F9F9',
          15: '#F4F4F4',
          40: '#ECECEC',
          50: '#D4D4D4',
          60: '#909090',
          70: '#808080',
          80: '#4B4B4B',
          100: '#000000'
        },
        white: {
          0: '#ffffff',
        },
        yellow: {
          star: '#F6BD2B'
        }
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.2rem',    // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '8.5': '2.125rem', // 34px
        '10': '2.5rem',   // 40px
        '15': '3.75rem',  // 60px
        '18': '4.5rem',   // 72px
        '20': '5rem',     // 80px
        '22.5': '5.625rem', // 90px
        '25': '6.25rem',  // 100px
        '30': '7.5rem',   // 120px
      },
      width: {
        '1196': '1196px',
        '1920': '1920px'
      },
      maxWidth: {
        '1196': '1196px',
        '1920': '1920px',
        'container': '1196px',
        'full-width': '1920px',
      },
      screens: {
        'container': '1196px',
        'full': '1920px',
      },
      boxShadow: {
        'category': '0 4px 40px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
