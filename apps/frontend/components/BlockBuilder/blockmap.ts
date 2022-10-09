import dynamic from "next/dynamic";

const blockMap =  {
    "blocks.hero": dynamic(() => import("../../blocks/Hero")),
    "blocks.text": dynamic(() => import("../../blocks/Text")),
}

export default blockMap