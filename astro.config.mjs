// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://movingout.dev',
  integrations: [tailwind(), react()],

  env: {
    schema: {
      TURSO_DATABASE_URL: envField.string({
        context: 'server',
        access: 'secret',
      }),
      TURSO_AUTH_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
})
