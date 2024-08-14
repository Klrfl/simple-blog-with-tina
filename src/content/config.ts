import { defineCollection, z } from "astro:content";
import { title } from "process";

// in Tina the name is singular "post". Sorry
// If you would like to refactor it please do
const postsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    date: z.date(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional()
  })
})

export const collections = {
  'posts': postsCollection
}