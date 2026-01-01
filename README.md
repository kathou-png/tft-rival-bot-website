# React + TypeScript + Tailwind CSS Boilerplate

A modern, production-ready boilerplate for building React applications with TypeScript, Tailwind CSS, and internationalization support.

## 🚀 Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework

### Internationalization

- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- Supports: English (en) and French (fr)

### Code Quality

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## ✨ Features

- ⚡️ **Fast Development** - Vite for instant HMR
- 🎨 **Tailwind CSS** - Utility-first styling throughout
- 🌍 **i18n Ready** - English and French translations with language switcher
- 🔒 **Type Safety** - Full TypeScript support
- 🎯 **Code Quality** - ESLint + Prettier with pre-commit hooks
- 📦 **Environment Variables** - Type-safe env configuration
- 🎨 **Modern UI** - Clean, responsive design patterns

## 📁 Project Structure

```
react-ts-tailwind-boilerplate/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable React components
│   │   └── LanguageSwitcher.tsx
│   ├── config/           # Configuration files
│   │   └── env.ts        # Environment variables
│   ├── i18n/             # Internationalization
│   │   └── config.ts     # i18n configuration
│   ├── locales/          # Translation files
│   │   ├── en.json       # English translations
│   │   └── fr.json       # French translations
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles (Tailwind imports)
├── .husky/               # Git hooks
│   └── pre-commit        # Pre-commit hook
├── .prettierrc.json      # Prettier configuration
├── .prettierignore       # Prettier ignore patterns
├── eslint.config.js      # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 📋 Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-ts-tailwind-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional):

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

## 📜 Available Commands

### Development

```bash
npm run dev          # Start development server (with HMR)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without writing
```

### Git Hooks

```bash
npm run prepare      # Set up Husky git hooks (runs automatically after npm install)
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.example.com
VITE_APP_ENV=development
VITE_ANALYTICS_KEY=your-analytics-key
```

Access environment variables through the type-safe config:

```typescript
import { ENV } from './config/env'

console.log(ENV.API_URL)
```

### Tailwind CSS

Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin. No additional configuration needed - just use Tailwind classes directly in your components.

### Prettier

Prettier is configured with the following settings:

- Single quotes
- No semicolons
- 2-space indentation
- 80 character line width
- Trailing commas (ES5)

### ESLint

ESLint is configured with React and TypeScript support. Rules can be customized in `eslint.config.js`.

## 🌍 Internationalization (i18n)

### Adding Translations

1. Add translation keys to `src/locales/en.json` and `src/locales/fr.json`:

```json
// en.json
{
  "welcome": "Hello World",
  "greeting": "Welcome to our app"
}

// fr.json
{
  "welcome": "Bonjour le monde",
  "greeting": "Bienvenue dans notre application"
}
```

2. Use translations in your components:

```typescript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('welcome')}</h1>
}
```

### Language Switcher

The `LanguageSwitcher` component is already included in the App. It:

- Saves language preference to localStorage
- Persists across page reloads
- Styled with Tailwind CSS

### Adding New Languages

1. Create a new translation file: `src/locales/[lang].json`
2. Add the language to `src/i18n/config.ts`:

```typescript
import [lang]Translations from '../locales/[lang].json'

resources: {
  // ... existing languages
  [lang]: {
    translation: [lang]Translations,
  },
}
```

3. Update the `LanguageSwitcher` component to include the new language

## 🔧 Git Hooks

Pre-commit hooks are set up with Husky and lint-staged. On each commit:

- Prettier formats staged files
- ESLint checks and fixes staged files
- Commit is blocked if there are unfixable errors

To bypass hooks (not recommended):

```bash
git commit --no-verify
```

## 📦 Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory, optimized and ready to deploy.

## 🎨 Styling Guidelines

This boilerplate uses **Tailwind CSS exclusively**. Avoid:

- Creating custom CSS files (unless absolutely necessary)
- Using inline styles
- Importing CSS frameworks

Instead, use Tailwind utility classes:

```tsx
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-gray-800">Hello World</h1>
</div>
```

## 📝 TypeScript

The project is fully typed with TypeScript. Type definitions are configured in:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node.js-specific config

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure code is formatted (`npm run format`)
4. Ensure linting passes (`npm run lint`)
5. Commit (pre-commit hooks will run automatically)
6. Push and create a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [i18next](https://www.i18next.com/) - Internationalization framework

---

Built with ❤️ using modern web technologies
