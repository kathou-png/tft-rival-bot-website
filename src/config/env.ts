export const ENV = {
  API_URL: import.meta.env.VITE_API_URL as string,
  APP_ENV: import.meta.env.VITE_APP_ENV as
    | 'development'
    | 'staging'
    | 'production',
  ANALYTICS_KEY: import.meta.env.VITE_ANALYTICS_KEY as string | undefined,
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  EMAILJS_TEMPLATE_ID_FEEDBACK: import.meta.env
    .VITE_EMAILJS_TEMPLATE_ID_FEEDBACK as string,
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
}
