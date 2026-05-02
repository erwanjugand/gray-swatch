import { baseConfig, vueConfig } from '@erwanjugand/eslint-config'
import prettierConfig from 'eslint-config-prettier/flat'
import { defineConfig } from 'eslint/config'

export default defineConfig(baseConfig, vueConfig, prettierConfig, {
  ignores: ['dist'],
})
