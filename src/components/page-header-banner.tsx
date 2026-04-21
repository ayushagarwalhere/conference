import Image from "next/image";
import Link from "next/link";

type PageHeaderBannerProps = {
  title: string;
};

export default function PageHeaderBanner({ title }: PageHeaderBannerProps) {
  return (
    <section className="relative top-0 left-1/2 right-1/2 -mt-9 mb-8 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
      <div className="relative h-48 w-full sm:h-56 lg:h-64">
        <Image
          src="/header.png"
          alt={`${title} page banner`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0b2a89]/25" />
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
          <Link
            href="/"
            className="inline-block rounded-md bg-white/95 px-4 py-2 text-sm font-semibold text-[#0b2a89] shadow-sm transition hover:bg-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}