import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page",
    description: "Blog Page Description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            Blog layout
            {children}
        </div>
    );
}
