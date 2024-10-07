import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-10 md:gap-20 mt-40 lg:mt-0">
        <div className="max-w-6xl flex flex-col gap-5 text-center md:text-left">
          <h2 className="scroll-m-20 text-2xl sm:text-3xl font-extralight tracking-tight first:mt-0">
            Puneet Bajaj is a software engineer based in Atlanta, specializing
            in full stack development and digital solutions. Currently, he leads
            interactive digital human lab at Georgia State University,
            integrating AI and computer vision technologies.
          </h2>
          <Link
            href="/work"
            className="scroll-m-20 text-blue-400 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0 inline-block"
          >
            view work
          </Link>
        </div>
        <div className="relative w-full max-w-[600px] md:flex-grow hidden md:block">
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
