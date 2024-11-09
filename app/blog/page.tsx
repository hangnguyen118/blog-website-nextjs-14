export default async function Page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    });
    console.log("!")
    const data = await res.json();
    return (
        <div>
            <h3>Blog page</h3>
            <div>
                {
                    data.map((post: {userId: string, id: string, title:string, body:string}) => (
                        <p key={post.id}>{post.title}</p>
                    ))
                }
            </div>
        </div>
    )
}
