import Image from "next/image"
export default function StrapiImage({className, alt, src}){
    const imagePlaceholder = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

    function getURL(){
        return `http://localhost:1337${src}`;
    }
    // eslint-disable-next-line @next/next/no-img-element
    return (<img src={getURL()} alt={alt} className={className}/>)

}