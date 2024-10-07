import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center w-full h-full gap-20">
        <div className="max-w-6xl flex flex-col gap-5">
          <h2 className="scroll-m-20 text-3xl font-extralight tracking-tight first:mt-0">
            Puneet Bajaj is a software engineer based in atlanta, specializing
            in full stack development and digital solutions. Currently, he leads
            interactive digital human lab at georgia state university,
            integrating ai and computer vision technologies.
          </h2>
          <Link href="/work" className="scroll-m-20 text-blue-400 text-3xl font-semibold tracking-tight first:mt-0 inline-block">
              view work
          </Link>
        </div>
        <div className="relative flex-grow hidden md:block">
          <Image
            src="/images/me.jpg"
            width={600}
            height={900}
            alt="Image"
            className="rounded-3xl object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        </div>
      </section>
    </main>
  );
}
