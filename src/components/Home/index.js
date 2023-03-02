import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
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
                            <h2>Article récents :</h2>
                        </div>
                        <div>
                            <div class="card margin-vert--md">
                                <div class="card__header">
                                    <h3>pyproject.toml</h3>
                                </div>
                                <div class="card__body">
                                    <p>Packaging python</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container margin-vert--xl">
                        <div>
                            <h2>Posts récents : </h2>
                        </div>
                        <div>
                            {recentPosts.map(({ content: BlogPostContent }) => (
                                <BlogPostProvider
                                    key={BlogPostContent.metadata.permalink}
                                    content={BlogPostContent}
                                >
                                    <Link
                                        to={BlogPostContent.metadata.permalink}
                                    >
                                        <div class="card margin-vert--md">
                                            <div class="card__header">
                                                <h3>
                                                    {
                                                        BlogPostContent.metadata
                                                            .title
                                                    }
                                                </h3>
                                            </div>
                                            <div class="card__body">
                                                <p>
                                                    {
                                                        BlogPostContent.metadata
                                                            .description
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </BlogPostProvider>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
