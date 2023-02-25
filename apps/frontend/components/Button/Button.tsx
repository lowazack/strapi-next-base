import styles from "./Button.module.scss"

export default function Button({children, onClick}){

    
    const ButtonElement = onClick? 'button':'a';

    return (
        <ButtonElement className={styles.button}>
            {children}
        </ButtonElement>
    )
}