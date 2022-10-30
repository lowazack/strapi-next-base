import Image from "next/image"

export default function StrapiImage({className = "", alt, src}){
    
    function getURL(){
        return `http://localhost:1337${src}`;
    }
    
    // eslint-disable-next-line @next/next/no-img-element
    return (<img src={getURL()} alt={alt} className={className}/>)

}