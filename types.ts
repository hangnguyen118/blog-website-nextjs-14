type Badges = {
    emoji: string;
    label: string;
}
export type BlogCardProps = {
    id: string;
    previewImage: string;
    title: string;
    country?: string;
    description: string;
    badges?: Badges[],
    updatedAt: string,
    slug: string,
    content?: string,
    highlight?: string
};
export type AuthorInfo = {
    name: string,
    status: string,
    avatarImage: string
}
export type TypeAuth = 'login' | 'register';
export type ButtonLinkProps = {
    name: string;
    href: string
    style: "1" | "2";
  }