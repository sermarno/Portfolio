import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b flex justify-between items-center">
      <h1 className="text-lg font-semibold">My Portfolio</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
