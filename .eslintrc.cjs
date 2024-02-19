module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',

    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',

    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'next',
  ],
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.cjs', '.github'],
  plugins: ['import', 'jsx-a11y', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-relative-parent-imports': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [{
          group: ['./*', '../*'],
          message: 'Relative imports are not allowed. Use absolute paths instead.',
        }],
      },
    ],
  },
};
