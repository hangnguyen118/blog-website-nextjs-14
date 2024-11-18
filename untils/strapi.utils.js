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
export async function fetchBlogArticles() {
    const blogData = await fetchDataFromStrapi("api/blogs?populate=*");
    const proccessedBlogArticles = blogData.map(processInfoBlog);
    proccessedBlogArticles.sort(
        (a, z) => new Date(z.updatedAt) - new Date(a.updatedAt));
    return proccessedBlogArticles;
}
function processInfoBlog(data) {
    return {
        documentId: data.documentId,
        title: data.title,
        userId: data.userId,
        content: data.content,
        previewImage: BASE_URL+data.image[0].url,
        images: data.image.map((image) => ({
            url: image.url, 
            alt: image.alternativeText,
        })),
        updatedAt: data.updatedAt,
        id: data.id,
    };
};