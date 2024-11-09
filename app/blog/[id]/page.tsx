import { notFound } from "next/navigation";

async function fetchPost(id: string) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            next: {
                revalidate: 60
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Blog Error", error);
        notFound();
    }
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await fetchPost(id);
    return (
        <div>
            <p>page id: {id}</p>
            <h2>{data.id}</h2>
            <h3>{data.title}</h3>
            <div>{data.body}</div>
        </div>
    )
}
export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json();
    return data.map((post: { userId: string, id: string, title: string, body: string }) => (
        {
            id: String(post.id),
        }
    ));
}

export const dynamicParams = false;