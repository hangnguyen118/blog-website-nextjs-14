import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
    
  return (
    <header>
         <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <SearchBar/>
    </header>
  )
}
