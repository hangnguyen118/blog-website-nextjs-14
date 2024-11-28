import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";

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
        slug: data.slug,
        content: data.content
    };
};
export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    };
    return date.toLocaleDateString("en-US", options);
}
