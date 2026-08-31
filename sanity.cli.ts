import {defineCliConfig} from 'sanity/cli'
export default defineCliConfig({
  api:{ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g061zdty', dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' },
  studioHost: 'webschool-01',
  deployment: { appId: 'tkrltmqwwi30uzxfnw6ln9bs', autoUpdates: true },
})

