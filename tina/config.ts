import { defineConfig } from "tinacms";
import postCollection from "./collections/post";
import configCollection from "./collections/config";
import pageCollection from "./collections/page";

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
      postCollection,
      configCollection,
      pageCollection,
    ],
  },
});
