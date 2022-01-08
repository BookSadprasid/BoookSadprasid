import Head from "next/head";
import Link from "next/link";
import { Nav, Footer } from "@components";
import { useMemo } from "react";

export default function Home() {
  const sitemap = useMemo(
    () => [
      { number: "01", url: "/about-me", content: "Who is Book?" },
      {
        number: "04",
        url: "/design-and-development",
        content: "Design & Development",
      },
      {
        number: "02",
        url: "/travel-and-photography",
        content: "Travel & Photography",
      },
      {
        number: "05",
        url: "/artwork-and-creations",
        content: "Artwork & Creations",
      },
      {
        number: "03",
        url: "/academics-and-research",
        content: "Academia & Research",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Book Sadprasid</title>
      </Head>

      <Nav />

      <main className="container bg-springWood">
        <div>
          <p className="text-center tag-sm">บุ๊ค กานต์ชนาต ศาสตร์ประสิทธิ์</p>
          <h1 className="text-center font-quicksand font-500 text-[46px] mb-3">
            Book Sadprasid
          </h1>
          <p className="text-center text-[19px]">
            Bridging the gap between humanity & technology
          </p>

          <section className="relative py-2 tablet:pb-0 flex justify-center flex-col tablet:flex-row h-auto tablet:h-[660px]">
            <img
              src="/hero.png"
              alt="hero"
              height="800"
              className="tablet:h-[800px] ml-6"
            />

            {/* Floating Nav */}
            <nav className="inset-0 flex items-center justify-center tablet:absolute">
              <div
                className="tablet:w-full grid grid-cols-2 gap-y-5"
                style={{
                  columnGap: "calc(100% - 500px)",
                }}
              >
                {sitemap.map(({ number, url, content }, index) => (
                  <Card
                    key={content}
                    url={url}
                    index={number}
                    className="mr-5 tablet:mr-0"
                  >
                    {content}
                  </Card>
                ))}
              </div>
            </nav>
          </section>
        </div>
      </main>

      <Footer mt={150} />
    </div>
  );
}

function Card({
  url,
  index,
  children,
  className,
}: {
  url: string;
  index: string;
  children: string;
  className: string;
}) {
  return (
    <Link href={url}>
      <a
        className={`w-[250px] h-[100px] bg-white px-2 py-3 flex items-center cursor-pointer hover:shadow transition-shadow ${className}`}
      >
        <div className="text-macaroniAndCheese text-[30px] font-700 mr-2">
          {index.padStart(2, "0")}
        </div>
        <div className="flex-grow text-[12px]">{children}</div>
        <img src="/arrow.svg" alt="arrow" />
      </a>
    </Link>
  );
}
