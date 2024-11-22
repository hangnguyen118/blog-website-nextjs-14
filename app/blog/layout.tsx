import { Container } from "@mantine/core";
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
        <main>
            <Container size="md" pt="lg" pb="xl">
                {children}
            </Container>
        </main>
    );
}
