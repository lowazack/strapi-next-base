import BlockBuilder from "../../components/BlockBuilder";
import { strapiGet } from "../../lib/strapi";

async function getPage(slug:string) {
    const page = (await strapiGet(`/api/pages?filters[slug][$eq]=${slug}&populate=%2A`))
    .data[0];
    
    return {page}
}


export default async function Page({params: {slug}}){
    const {page} = await getPage(slug);
    return (
        <BlockBuilder blocks={page.attributes.blocks} />
    )
}