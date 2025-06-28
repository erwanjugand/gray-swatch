import eslint from '@eslint/js'
import tsConfig from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier/flat'
import vueConfig from 'eslint-plugin-vue'
import globals from 'globals'

export default tsConfig.config(
  eslint.configs.recommended,
  ...tsConfig.configs.strict,
  ...vueConfig.configs['flat/recommended'],
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
      parserOptions: {
        parser: tsConfig.parser,
      },
    },
  },
  {
    ignores: ['dist'],
  },
)
