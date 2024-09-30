import { themes as prismThemes } from "prism-react-renderer";

const presets = [["classic", { docs: { routeBasePath: "/" }, blog: false }]];

const i18n = {
  defaultLocale: "en",
  locales: ["en"],
};

const githubLink = {
  href: "https://github.com/vimtaai/book-javascript",
  label: "GitHub",
  position: "right",
};

const navbar = {
  title: "Learning Programming with JavaScript",
  items: [githubLink],
};

const prism = {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
};

const config = {
  title: "Learning Programming with JavaScript",
  url: "https://vimtaai.github.io",
  baseUrl: "/book-javascript/",
  i18n,
  presets,
  themeConfig: { navbar, prism },
};

export default config;
