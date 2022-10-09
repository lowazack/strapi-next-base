import { useEffect } from "react"
import blockMap from "./blockmap"

export default function BlockBuilder({ blocks }) {

    function GetBlock(block) {
        return blockMap[block.__component].render({
            data: block,
        })
    }

    function getNextBlock(currentKey) {
        console.log()
        if(blocks[currentKey + 1]){
            return blocks[currentKey + 1].__component
        }

        return "null";
    }

    function getPrevBlock(currentKey) {
        console.log()
        if(blocks[currentKey - 1]){
            return blocks[currentKey - 1].__component
        }

        return "null";
    }


    return (
        <>
            {blocks.map(((block, key) => (
                <div
                    key={`block-${block.__component}-${block.id}`}
                    data-block={block.__component}
                    data-block-pos={key}
                    data-next-block={getNextBlock(key)}
                    data-prev-block={getPrevBlock(key)}
                >
                    {GetBlock(block)}
                </div>
            )))}
        </>
    )
}