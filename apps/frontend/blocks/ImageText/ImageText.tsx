import ReactMarkdown from "react-markdown";
import StrapiImage from "../../components/StrapiImage/StrapiImage";
import styles from "./ImageText.module.scss";

export default function ImageText({ data }){    
    const {image, title, text, flip} = data;

    return (
        <div className={styles.imageText} data-flip={flip}>
            <StrapiImage
                alt={image.data.attributes.caption}
                src={image.data.attributes.url}
                className={styles.image}
            />
            <div className={styles.textCont}>
                <h2>{title}</h2>
                <div>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </div>
        
    )
}