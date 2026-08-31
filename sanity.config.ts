import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemas'

export default defineConfig({
  name: 'webschool-01',
  title: 'webschool-01 — SMA Negeri X (Template Fiktif)',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'g061zdty',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})

