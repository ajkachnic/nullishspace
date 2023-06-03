// import prettierPluginAstro from 'prettier-plugin-astro'
// import prettierPluginUnocss from '@alexanderniebuhr/prettier-plugin-unocss'

module.exports = {
  plugins: [ 
    import("prettier-plugin-astro"), 
    import("@alexanderniebuhr/prettier-plugin-unocss") 
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
}
