import React from "react";
import clsx from "clsx";
import styles from "./NewArticle.module.css";
import Link from "@docusaurus/Link";

export default function NewArticle({ link, title, description }) {
    return (
        <Link to={link}>
            <div class="card margin-vert--md">
                <div class="card__header">
                    <h3>{title}</h3>
                </div>
                <div class="card__body">
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}
