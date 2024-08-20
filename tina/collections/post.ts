import { slugify } from "@/utils/utils";
import type { Collection } from "tinacms";


const postCollection: Collection = {
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
}

export default postCollection
