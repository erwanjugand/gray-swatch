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
    rules: {
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsConfig.parser,
        sourceType: 'module',
      },
    },
  },
  {
    ignores: ['dist'],
  },
)
