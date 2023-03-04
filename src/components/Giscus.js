import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <>
            <hr />
            <Giscus
                repo="h4c5/blog-giscus-comments"
                repoId="R_kgDOHgdrtQ"
                category="Announcements"
                categoryId="DIC_kwDOHgdrtc4CPsBs"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="top"
                theme={colorMode}
                lang="fr"
                loading="lazy"
                crossorigin="anonymous"
                async
            />
        </>
    );
}
