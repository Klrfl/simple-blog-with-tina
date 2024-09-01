import { defineCollection, z } from "astro:content";

// in Tina the name is singular "post". Sorry
// If you would like to refactor it please do
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional()
  })
})

export const collections = {
  'posts': postsCollection
}
