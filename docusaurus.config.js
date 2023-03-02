// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const N_BLOG_POSTS_FEED = 20;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "HacheNotes",
    favicon: "img/favicon.ico",

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
                            // keep only the 10 most recent blog posts in the feed
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

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // // Replace with your project's social card
            // image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: "HacheNotes",
                // logo: {
                //   alt: 'My Site Logo',
                //   src: 'img/logo.svg',
                // },
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
                        title: "Notes",
                        items: [
                            {
                                label: "Python",
                                to: "/docs/python",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
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
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} HacheNotes. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
