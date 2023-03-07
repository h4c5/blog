import React, { useState } from "react";
import { Badge, Button } from "@mui/material";
import styles from "./ExampleComponent.module.css";

export default function Example() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.exampleButton}>
            <Badge color="secondary" badgeContent={count}>
                <Button onClick={() => setCount(count + 1)} variant="contained">
                    Exemple de composant
                </Button>
            </Badge>
        </div>
    );
}
