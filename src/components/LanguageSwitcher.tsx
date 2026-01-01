import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'fr'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
        }`}
      >
        FR
      </button>
    </div>
  )
}

export default LanguageSwitcher
