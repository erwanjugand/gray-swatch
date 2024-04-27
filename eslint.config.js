import eslint from '@eslint/js'
import tsConfig from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import vueConfig from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default tsConfig.config(
  eslint.configs.recommended,
  ...vueConfig.configs['flat/recommended'],
  ...tsConfig.configs.strict,
  prettierConfig,
  {
    ignores: ['dist'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsConfig.parser,
        sourceType: 'module',
      },
    },
  },
)
