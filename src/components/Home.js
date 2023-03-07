import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./Home.module.css";
import NewArticle from "./NewArticle";
import BlogNews from "./BlogNews";

const articlesNews = [
    {
        link: "/docs/python/packaging-python",
        title: "Packager son code python",
        date: "2023-03-04",
        description: "Packager son code python en 2023 avec pyproject.toml",
    },
];

function HomepageHeader() {
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 class="hero__title">👋 Bienvenue</h1>
                <p className="hero__subtitle">
                    Ce blog regroupe mes notes sur la programmation python et la
                    data science
                </p>
            </div>
        </header>
    );
}

export default function Home({ recentPosts }) {
    return (
        <Layout
            title={"Accueil"}
            description="Ce blog regroupe mes notes sur la programmation python et la data science"
        >
            <HomepageHeader />
            <main>
                <div className="container">
                    <div className="container margin-vert--xl">
                        <div>
                            <h2>Notes récentes :</h2>
                        </div>
                        <div>
                            {articlesNews.map((articlenews) => (
                                <NewArticle {...articlenews} />
                            ))}
                        </div>
                    </div>
                    <div className="container margin-vert--xl">
                        <div>
                            <h2>Posts récents : </h2>
                        </div>
                        <div>
                            {recentPosts.map(({ content: BlogPostContent }) => (
                                <BlogNews blogpost={BlogPostContent} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
