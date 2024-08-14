import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tina from "astro-tina";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tina()],
  redirects: {
    "/tag/[tag]": "/tag/[tag]/1",
  },
});
