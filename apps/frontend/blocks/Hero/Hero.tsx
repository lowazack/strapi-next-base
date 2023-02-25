"use client";

import styles from "./Hero.module.scss";
import Button from "../../components/Button";
import { useEffect } from "react";


export default function Hero({ data }) {

    useEffect(()=> {
        alert("asfasdfsadf");
    }, [])

    
    return (
        <div className={styles.hero}>
            <div className={styles.textCont}>
                <h1 className={styles.title}>
                    {data.heading}
                </h1>
                <p className={styles.text}>
                    placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper
                </p>
                <Button onClick={()=> alert("asdfasdf")}>Our Work</Button>
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    <div className={styles.gridItem}/>
                    <div className={styles.gridItem}/>
                    <div className={styles.gridItem}/>
                    
                    <div className={styles.gridItem}/>
                    <div className={styles.gridItem}/>
                    <div className={styles.gridItem}/>
                    
                    <div className={styles.gridItem}/>
                    <div className={styles.gridItem}/>
                    <div className={styles.gridItem}/>
                </div>
            </div>
        </div>
    )
}