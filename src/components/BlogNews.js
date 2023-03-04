import React from "react";
import clsx from "clsx";
import styles from "./BlogNews.module.css";
import Link from "@docusaurus/Link";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

export default function BlogNews({ blogpost }) {
    return (
        <BlogPostProvider key={blogpost.metadata.permalink} content={blogpost}>
            <Link to={blogpost.metadata.permalink}>
                <div class="card margin-vert--md">
                    <div class="card__header">
                        <h3>{blogpost.metadata.title}</h3>
                    </div>
                    <div class="card__body">
                        <p>{blogpost.metadata.description}</p>
                    </div>
                </div>
            </Link>
        </BlogPostProvider>
    );
}
