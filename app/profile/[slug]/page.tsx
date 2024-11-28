export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    return (
        <div>page {slug}</div>
    )
}
