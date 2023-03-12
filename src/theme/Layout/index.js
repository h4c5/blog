import React from "react";
import Layout from "@theme-original/Layout";

export default function LayoutWrapper(props) {
    return (
        <>
            <Layout {...props} />
            <script defer src="/_vercel/insights/script.js"></script>
        </>
    );
}
