import {defineCliConfig} from 'sanity/cli'
export default defineCliConfig({
  api:{ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g061zdty', dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' },
  studioHost: 'webschool-cms-template1',
  deployment: { appId: 'c4n5kzqvj6ggqcbrhifqoc41', autoUpdates: true },
})

