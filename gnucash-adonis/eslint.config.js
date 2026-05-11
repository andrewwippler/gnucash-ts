import { configApp, INCLUDE_LIST } from '@adonisjs/eslint-config'

export default configApp(
  {
    rules: {
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@unicorn/filename-case': 'off',
    },
  },
  {
    files: ['database/Database.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
)
