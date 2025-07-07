// importing image
import Image from "next/image";

// src/app/page.tsx
export default function HomePage() {
  return (
    <section>
      <Image
        src="/proImage.jpg"
        alt="Profession Self-Portrait"
        width={400}
        height={600}
      />
      <h1 className="text-3xl font-bold text-right">Serra Arnold</h1>
      <p className="mt-2 text-right">UX-Focused Informatics Graduate</p>
    </section>
  );
}
