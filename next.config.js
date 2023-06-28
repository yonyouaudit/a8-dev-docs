const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./config/theme.config.jsx"
});

module.exports = withNextra({
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "zh",
  },
  darkMode: true
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
