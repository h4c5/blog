import React from "react";
import Layout from "@theme-original/Layout";

export default function LayoutWrapper(props) {
    return (
        <>
            <Layout {...props} />
            <script
                defer
                src="https://blog-h4c5.vercel.app/_vercel/insights/script.js"
            ></script>
        </>
    );
}
