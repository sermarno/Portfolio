import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 border-b flex justify-between items-center">
      <Link href="/">
        <Image
          src="/icon.svg"
          alt="Serra Portfolio Icon"
          width={120}
          height={50}
        />
      </Link>
      <nav className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
