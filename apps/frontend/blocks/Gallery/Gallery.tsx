import GallerySlider from "./GallerySlider";
import styles from "./Gallery.module.scss"

export default function Gallery({data}){

    return (
        <div className={styles.gallery}>
            <h1>
                Gallery
            </h1>

            <GallerySlider slides={data.images.data}/>
        </div>
    )
}