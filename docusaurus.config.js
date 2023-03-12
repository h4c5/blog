// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const N_BLOG_POSTS_FEED = 20;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "HacheNotes",
    favicon: "/img/hache.svg",

    // Set the production url of your site here
    url: "https://h4c5.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "h4c5", // Usually your GitHub org/user name.
    projectName: "blog", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "fr",
        locales: ["fr"],
    },
    markdown: {
        mermaid: true,
    },
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    plugins: [
        // Use custom blog plugin
        [
            "./plugins/blog-plugin.js",
            {
                id: "blog",
                routeBasePath: "blog",
                path: "./blog",
                showReadingTime: true,
                feedOptions: {
                    type: "all",
                    copyright: `Copyright © ${new Date().getFullYear()} HacheNotes. Built with Docusaurus.`,
                    createFeedItems: async (params) => {
                        const { blogPosts, defaultCreateFeedItems, ...rest } =
                            params;
                        return defaultCreateFeedItems({
                            // keep only the most recent blog posts in the feed
                            blogPosts: blogPosts.filter(
                                (item, index) => index < N_BLOG_POSTS_FEED
                            ),
                            ...rest,
                        });
                    },
                },
            },
        ],
        [
            require.resolve("docusaurus-lunr-search"),
            {
                languages: ["fr"],
            },
        ],
    ],
    themes: ["@docusaurus/theme-mermaid"],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            metadata: [
                {
                    name: "keywords",
                    content: "blog, python, data science, development",
                },
            ],
            // // Replace with your project's social card
            // image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: "HacheNotes",
                logo: {
                    alt: "HacheNotes logo (an axe)",
                    src: "img/hache.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "python/python",
                        position: "left",
                        label: "Notes",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        label: "Github",
                        href: "https://github.com/h4c5",
                    },
                    {
                        label: "Gitlab",
                        href: "https://gitlab.com/h4c5",
                    },
                    {
                        label: "Stack Overflow",
                        href: "https://stackoverflow.com/users/7685195/h4kim",
                    },
                ],
                copyright: `Built with <a target="_blank" href="https://docusaurus.io/fr/">Docusaurus</a> <br/>
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    <img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" />
                </a> `,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            mermaid: {
                theme: { light: "neutral", dark: "forest" },
            },
        },
};

module.exports = config;
