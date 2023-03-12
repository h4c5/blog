import React from "react";
import Content from "@theme-original/DocItem/Content";
import Giscus from "@site/src/components/Giscus.js";

export default function ContentWrapper(props) {
    return (
        <>
            <Content {...props} />
            <Giscus />
        </>
    );
}
