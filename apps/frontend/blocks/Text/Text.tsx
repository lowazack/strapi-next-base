import ReactMarkdown from "react-markdown"
export default function Text({data}){
    const {text} = data
    console.log(data)

    return (
    <div>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
    )
}