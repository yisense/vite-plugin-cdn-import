import { defineConfig } from 'vite'
import importToCDN, { autoComplete } from '../../dist/index'

export default defineConfig({
  plugins: [
    importToCDN({
      modules: [autoComplete('react'), autoComplete('react-dom'), autoComplete('moment'), autoComplete('antd')],
    }),
  ],
})
