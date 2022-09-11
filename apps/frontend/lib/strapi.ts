import axios from "axios";

const strapiGet = async function(uri){
    const res = await axios.get(`${process.env.STRAPI_URL}${uri}`);
    
    return res.data;
}
export {strapiGet}