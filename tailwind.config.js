import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      },
      fontFamily: {
        sans: [
          '"Inter var", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          { fontFeatureSettings: '"cv02","cv03","cv04","cv11"' }
        ]
      }
    }
  }
}
