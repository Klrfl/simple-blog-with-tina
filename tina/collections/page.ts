import type { Collection } from "tinacms";

const pageCollection: Collection = {
name: "page",
  label: "Pages",
  path: "src/content/pages",
  fields: [
    {
      type: 'string',
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: "Body",
      isBody: true
    }
  ]
}

export default pageCollection
