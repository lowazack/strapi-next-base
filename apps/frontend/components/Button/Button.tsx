import styles from "./Button.module.scss"

export default function Button({children}){
    const ButtonElement = 'a';
    
    return (
        <ButtonElement className={styles.button}>
            {children}
        </ButtonElement>
    )
}