import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold text-gray-800">{t('welcome')}</h1>
    </div>
  )
}

export default App
