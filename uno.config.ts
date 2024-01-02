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
      sans: 'Helvetica Neue, Inter, sans-serif',
      display: 'Instrument Serif, serif',
      serif: 'equity_a, serif',
    }
  }
})
