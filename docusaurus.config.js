import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Guide to Learn Programming with JavaScript",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://vimtaai.github.io",
  baseUrl: "/book-javascript/",
  trailingSlash: false,

  organizationName: "vimtaai",
  projectName: "book-javascript",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      { docs: { routeBasePath: "/", sidebarPath: "sidebars.config.js" } },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Guide to Learn Programming with JavaScript",
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Introduction",
        },
        {
          type: "docSidebar",
          sidebarId: "javascript",
          sidebarCollapsible: false,
          position: "left",
          label: "Basics",
        },
        {
          href: "https://github.com/vimtaai/book-javascript",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Márton Visnovitz. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
