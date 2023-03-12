import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Giscus from "@site/src/components/Giscus.js";

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <BlogPostItem {...props} />
            <Giscus />
        </>
    );
}
