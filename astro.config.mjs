// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rewardrally.github.io",
  integrations: [
    starlight({
      title: "Reward Rally Documentation",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Shopify",
          items: [
            { label: "Install", slug: "shopify/install" },
            {
              label: "Store Credit",
              autogenerate: { directory: "shopify/store-credit" },
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
