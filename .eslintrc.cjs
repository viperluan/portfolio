module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-import-helpers'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        "newlinesBetween": "always",
        "groups": [
          "/^next/",
          "/^react/",
          "module",
          "/^@shared/",
          "/^~hooks/",
          [
            "parent",
            "sibling",
            "index"
          ],
          "/\\.module\\.scss/"
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  },
}
