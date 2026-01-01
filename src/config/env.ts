export const ENV = {
  API_URL: import.meta.env.VITE_API_URL as string,
  APP_ENV: import.meta.env.VITE_APP_ENV as
    | 'development'
    | 'staging'
    | 'production',
  ANALYTICS_KEY: import.meta.env.VITE_ANALYTICS_KEY as string | undefined,
}
