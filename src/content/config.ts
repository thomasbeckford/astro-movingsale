import { z, defineCollection } from 'astro:content'
import { file } from 'astro/loaders'

const items = defineCollection({
  loader: file('src/content/items/items.json'),
  schema: z.object({
    name: z.string(),
    price: z.number(),
    description: z.string().nullable(),
    image: z.string(),
  }),
})

export const collections = { items }
