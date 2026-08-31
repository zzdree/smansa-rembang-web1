import {defineCliConfig} from 'sanity/cli'
export default defineCliConfig({
  api:{ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g061zdty', dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' },
  studioHost: 'smansa-rembang-web1',
  deployment:{ appId: 'pjkkabjjv3hjbb07t0dpvv1j', autoUpdates: true },
})

