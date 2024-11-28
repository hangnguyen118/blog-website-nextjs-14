import { ButtonLinkProps } from "@/types";
import Link from "next/link";
import classes from './style.module.css';

export default function ButtonLink({ name, href, style }: ButtonLinkProps) {
    const linkButton = style==='1' ? (<Link href={href} className={classes.linkButton1}>{name}</Link>) 
    : <Link href={href} className={classes.linkButton2}>{name}</Link>
    return (
        <>
        {linkButton}
        </>
    )
}
