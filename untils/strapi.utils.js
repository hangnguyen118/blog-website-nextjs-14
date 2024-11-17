import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchDataFromStrapi(router) {
    const url = `${BASE_URL}/${router}`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        throw new Error(`Could not fetch data from ${url}`, error);
    }
}
export function processInfoBlogs(data) {
    console.log(data);
    return data.map((infoBlog) => ({
        documentId: infoBlog.documentId,
        title: infoBlog.title,
        userId: infoBlog.userId,
        content: infoBlog.content,
        previewImage: BASE_URL+infoBlog.image[0].url,
        images: infoBlog.image.map((image) => ({
            url: image.url, 
            alt: image.alternativeText,
        })),
        updatedAt: infoBlog.updatedAt,
        id: infoBlog.id,
    }));
};