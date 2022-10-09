import React from "react";
import styles from "./AppContainer.module.scss";

interface appContainerTypes {
    children: React.ReactNode;
}

export default function AppContainer({children}: appContainerTypes){
    return (
        <>
        <div className={styles.primaryBg}/>
        <div className={styles.secondaryBg}/>
        <div className={styles.appContainer}>
            {children}
        </div>
        </>
    )
}