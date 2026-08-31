import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemas'

export default defineConfig({
  name: 'smansa-rembang-web1',
  title: 'SMA N 1 Rembang',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g061zdty',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})

