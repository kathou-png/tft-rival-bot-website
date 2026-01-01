import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              {t('home.hero.inviteButton')}
            </a>
            <a
              href="#commands"
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors border border-gray-600"
            >
              {t('home.hero.commandsButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('home.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('home.features.feature1.title')}
              </h3>
              <p className="text-gray-400">
                {t('home.features.feature1.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('home.features.feature2.title')}
              </h3>
              <p className="text-gray-400">
                {t('home.features.feature2.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('home.features.feature3.title')}
              </h3>
              <p className="text-gray-400">
                {t('home.features.feature3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {t('home.stats.servers')}
              </div>
              <div className="text-gray-400">{t('home.stats.serversLabel')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {t('home.stats.users')}
              </div>
              <div className="text-gray-400">{t('home.stats.usersLabel')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {t('home.stats.commands')}
              </div>
              <div className="text-gray-400">{t('home.stats.commandsLabel')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                24/7
              </div>
              <div className="text-gray-400">{t('home.stats.uptime')}</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('home.cta.description')}
          </p>
          <a
            target="_blank"
            href="https://discord.com/api/oauth2/authorize?client_id=1326430140515100702&permissions=0&scope=bot%20applications.commands"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            {t('home.cta.button')}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
