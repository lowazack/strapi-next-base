import ReactMarkdown from "react-markdown";
import styles from "./Text.module.scss";

export default function Text({data}){
    const {text} = data

    return (
    <div className={styles.text}>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
    )
}