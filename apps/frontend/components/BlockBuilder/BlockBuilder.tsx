import blockMap from "./blockmap";
import styles  from "./BlockBuilder.module.scss";


export default function BlockBuilder({ blocks }) {

    function GetBlock(block) {
        const Element =  blockMap[block.__component];
        return (
            <Element data={block}/>
        )        
    }

    function getNextBlock(currentKey) {
        if(blocks[currentKey + 1]){
            return blocks[currentKey + 1].__component
        }

        return "null";
    }

    function getPrevBlock(currentKey) {
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
                    className={styles.block}
                    
                >
                    {GetBlock(block)}
                </div>
            )))}
        </>
    )
}