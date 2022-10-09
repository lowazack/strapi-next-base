import ReactMarkdown from "react-markdown"
export default function Text({data}){
    const {text} = data

    return (
    <div>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
    )
}