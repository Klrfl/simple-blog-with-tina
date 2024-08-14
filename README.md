[![Netlify Status](https://api.netlify.com/api/v1/badges/13421fcf-e03c-4f6a-9ad1-1aa1ec13e0ba/deploy-status)](https://app.netlify.com/sites/astro-simple-blog/deploys) [![Run Build](https://github.com/dofbi/astro-simple-blog-theme/actions/workflows/build-test.yml/badge.svg)](https://github.com/dofbi/astro-simple-blog-theme/actions/workflows/build-test.yml)

# Astro Simple blog theme

This Astro + Tina starter is based on the [simple blog theme for Astro](https://github.com/dofbi/astro-simple-blog-theme).

![screenshot](https://raw.githubusercontent.com/10mohi6/hugo-theme-simple-blog/master/images/screenshot.png)

## Demo

[View Creek on Netlify](https://astro-simple-blog.netlify.app/)
[Live editing on Tina](/public/assets/simple-blog-with-tina-demo.mp4)

## Credits

This starter is buiit on the simple blog theme for astro, which is built upon
another theme called [simple-blog](https://github.com/10mohi6/hugo-theme-simple-blog)
for [hugo](https://gohugo.io/). Full design credit goes to [10mohi6](https://github.com/10mohi6).

If this template helped you, buy @dofbi a coffee!

<a href="https://www.buymeacoffee.com/51JrBtX" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Features

- content
- pagination
- tags
- categories
- content management with Tina CMS
- live editing

## 🧞 Commands

This project uses PNPM. To install it, run:

```sh
npm i -g pnpm
```

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## Site Configuration

```json
{
  "site": {
    "language": "en",
    "title": "Astro Themes",
    "description": "<your site description>",
    "copyright": "© 2024 copyright text."
  },
  "links": [
    {
      "identifier": "about",
      "name": "About",
      "url": "/about/"
    }
  ],
  "settings": {
    "pagination": 6,
  }
}
```

## License

This template is [MIT](LICENSE) licensed.
