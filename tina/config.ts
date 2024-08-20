import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// const branch = import.meta.env.GITHUB_BRANCH || import.meta.env.HEAD || "main";
const branch = "main";

function slugify(input: string): string {
  return String(input)
    .trim()
    .toLowerCase()
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .split(" ", 8) // limit to 8 words, in normal cases
    .join("-")
    .replace(/[\s-]+/g, "-"); // replace multiple spaces or hyphens with a single hyphen
}

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        defaultItem: () => {
          const title = "Brand New Post";
          return {
            title,
            description: "So brand new in fact, it hasn't been edited yet",
            date: new Date().toISOString(),
          };
        },
        ui: {
          filename: {
            slugify: (values) => {
              return slugify(values.title);
            },
          },
          router: ({ collection, document }) => {
            return `/${collection.name}s/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "config",
        format: "json",
        path: "src/config",
        label: "Global config",
        ui: {
          global: true,
        },
        defaultItem: () => ({
          language: "en",
        }),
        fields: [
          {
            name: "site",
            label: "General site config",
            type: "object",
            fields: [
              {
                name: "title",
                label: "Site title",
                type: "string",
                required: true,
              },
              {
                name: "description",
                label: "Site description for SEO",
                type: "string",
                required: true,
              },
              {
                name: "copyright",
                label: "Copyright text",
                type: "string",
                required: true,
              },
              {
                name: "language",
                label: "Language",
                type: "string",
                description: "Site language.",
                required: true,
              },
            ],
          },
          {
            name: "links",
            label: "Site links",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                name: "identifier",
                label: "Identifier",
                type: "string",
                required: true,
              },
              {
                name: "name",
                label: "Name",
                type: "string",
                required: true,
              },
              {
                name: "url",
                label: "URL",
                type: "string",
                required: true,
              },
            ],
          },
          {
            name: "settings",
            type: "object",
            fields: [
              {
                name: "pagination",
                label: "Pagination",
                description: "Posts to show per page",
                type: "number",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
