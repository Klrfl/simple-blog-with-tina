import type { Collection } from "tinacms";

const configCollection: Collection = {
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
      }

export default configCollection
