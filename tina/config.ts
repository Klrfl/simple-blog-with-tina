import { defineConfig } from "tinacms";
import postCollection from "./collections/post";
import configCollection from "./collections/config";
import pageCollection from "./collections/page";

// Your hosting provider likely exposes this as an environment variable
// const branch = import.meta.env.GITHUB_BRANCH || import.meta.env.HEAD || "main";
const branch = "main";

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
      postCollection,
      configCollection,
      pageCollection,
    ],
  },
});
