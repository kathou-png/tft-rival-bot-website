import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Commands() {
  const { t } = useTranslation()
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedCommand(command)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error('Failed to copy command:', err)
    }
  }

  const commandCategories = [
    {
      name: t('commands.categories.players.name'),
      icon: '👥',
      commands: [
        {
          name: t('commands.categories.players.commands.register.name'),
          description: t(
            'commands.categories.players.commands.register.description'
          ),
          usage: '!register <SummonerName> <TagLine>',
        },
        {
          name: t('commands.categories.players.commands.unregister.name'),
          description: t(
            'commands.categories.players.commands.unregister.description'
          ),
          usage: '!unregister <SummonerName>',
        },
        {
          name: t('commands.categories.players.commands.list.name'),
          description: t(
            'commands.categories.players.commands.list.description'
          ),
          usage: '!list',
        },
      ],
    },
    {
      name: t('commands.categories.rankings.name'),
      icon: '🏆',
      commands: [
        {
          name: t('commands.categories.rankings.commands.rank.name'),
          description: t(
            'commands.categories.rankings.commands.rank.description'
          ),
          usage: '!rank',
        },
      ],
    },
    {
      name: t('commands.categories.config.name'),
      icon: '⚙️',
      commands: [
        {
          name: t('commands.categories.config.commands.channel.name'),
          description: t(
            'commands.categories.config.commands.channel.description'
          ),
          usage: '!channel',
        },
        {
          name: t('commands.categories.config.commands.setTime.name'),
          description: t(
            'commands.categories.config.commands.setTime.description'
          ),
          usage: '!set_time',
        },
      ],
    },
    {
      name: t('commands.categories.help.name'),
      icon: '❓',
      commands: [
        {
          name: t('commands.categories.help.commands.help.name'),
          description: t('commands.categories.help.commands.help.description'),
          usage: '!help',
        },
      ],
    },
  ]

  return (
    <div
      id="commands"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('commands.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('commands.subtitle')}
          </p>
        </div>

        {/* Commands by Category */}
        <div className="space-y-8">
          {commandCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold text-white">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.commands.map((command, commandIndex) => (
                  <div
                    key={commandIndex}
                    className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {command.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {command.description}
                    </p>
                    <div
                      onClick={() => copyToClipboard(command.usage)}
                      className="bg-gray-800 px-3 py-2 rounded text-sm font-mono text-blue-400 border border-gray-700 cursor-pointer hover:bg-gray-700 hover:border-blue-500 transition-all relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{command.usage}</span>
                        {copiedCommand === command.usage ? (
                          <span className="text-green-400 text-xs ml-2 flex items-center gap-1">
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {t('commands.copied')}
                          </span>
                        ) : (
                          <svg
                            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">{t('commands.footer')}</p>
        </div>
      </div>
    </div>
  )
}

export default Commands
