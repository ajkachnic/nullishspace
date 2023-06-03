import { defineConfig, presetUno, presetTypography, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      sans: 'Switzer, Inter, sans-serif',
      serif: 'Instrument Serif, serif',
    }
  }
})