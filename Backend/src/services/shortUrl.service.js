import { saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoid } from "../utils/helper.js";
export const createShortUrlWithoutUser = async (url)=>{
    const shortUrl = generateNanoid();
    if(!shortUrl) throw new Error("Could not generate short URL");
    await saveShortUrl("2IKaH3",url);
    return shortUrl;
}
export const createShortUrlWithUser = async (url,userId)=>{
    const shortUrl = generateNanoid();
    if(!shortUrl) throw new Error("Could not generate short URL");
    await saveShortUrl(shortUrl,url,userId);
    return shortUrl;
}