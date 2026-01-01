import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ENV } from '../config/env'
import emailjs from '@emailjs/browser'

function About() {
  const { t } = useTranslation()
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [bugReport, setBugReport] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    steps: '',
  })
  const [isBugSubmitted, setIsBugSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState<'bug' | 'feedback'>('bug')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Tech stack and libraries from translations
  const techStack = t('about.developer.techStack', {
    returnObjects: true,
  }) as string[]
  const libraries = t('about.developer.libraries', {
    returnObjects: true,
  }) as string[]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (!emailjs) {
        throw new Error(
          'EmailJS is not configured. Please install @emailjs/browser and configure environment variables.'
        )
      }

      // Configuration EmailJS depuis les variables d'environnement
      const serviceId = ENV.EMAILJS_SERVICE_ID
      const templateId = ENV.EMAILJS_TEMPLATE_ID_FEEDBACK
      const publicKey = ENV.EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your .env file.'
        )
      }

      // Préparer les paramètres de l'email
      const templateParams = {
        from_name: feedback.name,
        from_email: feedback.email,
        message: feedback.message,
        to_email: 'kathou.trg@gmail.com',
        subject: 'Nouveau Feedback - TFT Rival Bot',
      }

      // Envoyer l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      // Succès
      setIsSubmitted(true)
      setFeedback({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err) {
      console.error('Error sending email:', err)
      setError(
        t('about.feedback.error') ||
          "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    })
  }

  const handleBugSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique pour envoyer le rapport de bug
    console.log('Bug report submitted:', bugReport)
    setIsBugSubmitted(true)
    setBugReport({ name: '', email: '', title: '', description: '', steps: '' })
    setTimeout(() => setIsBugSubmitted(false), 3000)
  }

  const handleBugChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBugReport({
      ...bugReport,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-300">{t('about.subtitle')}</p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What is TFT Rival Bot */}
          <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('about.what.title')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t('about.what.description')}
            </p>
          </section>

          {/* Features */}
          <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('about.features.title')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <span className="text-blue-500 mr-3">✓</span>
                <span>{t('about.features.feature1')}</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-500 mr-3">✓</span>
                <span>{t('about.features.feature2')}</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-500 mr-3">✓</span>
                <span>{t('about.features.feature3')}</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-500 mr-3">✓</span>
                <span>{t('about.features.feature4')}</span>
              </li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('about.why.title')}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('about.why.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('about.why.reason1.title')}
                </h3>
                <p className="text-sm text-gray-400">
                  {t('about.why.reason1.description')}
                </p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('about.why.reason2.title')}
                </h3>
                <p className="text-sm text-gray-400">
                  {t('about.why.reason2.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Developer & Technical Details */}
          <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('about.developer.title')}
            </h2>
            <div className="space-y-6">
              {/* Developer Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('about.developer.developerTitle')}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {t('about.developer.developerDescription')}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {t('about.developer.links.github') &&
                    t('about.developer.links.github') !==
                      'https://github.com/your-username' && (
                      <a
                        href={t('about.developer.links.github')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  {t('about.developer.links.portfolio') &&
                    t('about.developer.links.portfolio') !==
                      'https://your-portfolio.com' && (
                      <a
                        href={t('about.developer.links.portfolio')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Portfolio
                      </a>
                    )}
                  {t('about.developer.links.linkedin') &&
                    t('about.developer.links.linkedin') !==
                      'https://linkedin.com/in/your-profile' && (
                      <a
                        href={t('about.developer.links.linkedin')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('about.developer.techStackTitle')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(techStack) &&
                    techStack.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>

              {/* Libraries */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('about.developer.librariesTitle')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(libraries) &&
                    libraries.map((lib: string, index: number) => (
                      <span
                        key={index}
                        className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700"
                      >
                        {lib}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* Bug Report & Feedback - Tabs */}
          <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('about.contact.title')}
            </h2>

            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('bug')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'bug'
                    ? 'text-red-400 border-b-2 border-red-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {t('about.contact.bugTab')}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('feedback')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'feedback'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {t('about.contact.feedbackTab')}
              </button>
            </div>

            {/* Bug Report Tab */}
            {activeTab === 'bug' && (
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('about.bug.description')}
                </p>
                {isBugSubmitted ? (
                  <div className="bg-green-900/50 border border-green-700 text-green-400 px-4 py-3 rounded-lg">
                    {t('about.bug.success')}
                  </div>
                ) : (
                  <form onSubmit={handleBugSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="bug-name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          {t('about.bug.nameLabel')}
                        </label>
                        <input
                          type="text"
                          id="bug-name"
                          name="name"
                          value={bugReport.name}
                          onChange={handleBugChange}
                          required
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder={t('about.bug.namePlaceholder')}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="bug-email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          {t('about.bug.emailLabel')}
                        </label>
                        <input
                          type="email"
                          id="bug-email"
                          name="email"
                          value={bugReport.email}
                          onChange={handleBugChange}
                          required
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder={t('about.bug.emailPlaceholder')}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="bug-title"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('about.bug.titleLabel')}
                      </label>
                      <input
                        type="text"
                        id="bug-title"
                        name="title"
                        value={bugReport.title}
                        onChange={handleBugChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder={t('about.bug.titlePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bug-description"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('about.bug.descriptionLabel')}
                      </label>
                      <textarea
                        id="bug-description"
                        name="description"
                        value={bugReport.description}
                        onChange={handleBugChange}
                        required
                        rows={4}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder={t('about.bug.descriptionPlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bug-steps"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('about.bug.stepsLabel')}
                      </label>
                      <textarea
                        id="bug-steps"
                        name="steps"
                        value={bugReport.steps}
                        onChange={handleBugChange}
                        required
                        rows={4}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder={t('about.bug.stepsPlaceholder')}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      {t('about.bug.submitButton')}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Feedback Tab */}
            {activeTab === 'feedback' && (
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('about.feedback.description')}
                </p>
                {isSubmitted ? (
                  <div className="bg-green-900/50 border border-green-700 text-green-400 px-4 py-3 rounded-lg">
                    {t('about.feedback.success')}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-900/50 border border-red-700 text-red-400 px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('about.feedback.nameLabel')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedback.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('about.feedback.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('about.feedback.emailLabel')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('about.feedback.emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {t('about.feedback.messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={feedback.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder={t('about.feedback.messagePlaceholder')}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t('about.feedback.sending') || 'Envoi en cours...'}
                        </>
                      ) : (
                        t('about.feedback.submitButton')
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
