module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {
      'endOfLine': 'auto'
    }],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
