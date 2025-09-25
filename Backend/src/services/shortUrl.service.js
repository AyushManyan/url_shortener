import { saveShortUrl } from "../dao/shortUrl.js";
import { generateNanoid } from "../utils/helper.js";
export const createShortUrlWithoutUser = async (url)=>{
    const shortUrl = generateNanoid();
    await saveShortUrl(shortUrl,url);
    return shortUrl;
}
export const createShortUrlWithUser = async (url,userId)=>{
    const shortUrl = generateNanoid();
    await saveShortUrl(shortUrl,url,userId);
    return shortUrl;
}