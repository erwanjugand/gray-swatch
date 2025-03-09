import eslint from '@eslint/js'
import tsConfig from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import vueConfig from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

export default tsConfig.config(
  eslint.configs.recommended,
  ...vueConfig.configs['flat/recommended'],
  ...tsConfig.configs.strict,
  prettierConfig,
  {
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
    languageOptions: {
      globals: globals.browser,
      parser: vueParser,
      parserOptions: {
        parser: tsConfig.parser,
      },
    },
  },
  {
    ignores: ['dist'],
  },
)
