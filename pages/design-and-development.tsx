import Head from "next/head";
import { Nav, Footer } from "@components";
import { useMemo } from "react";

export default function AcademicAndResearch() {
  const gridLogos = useMemo(
    () => [
      { src: "/ghb.png", alt: "GHB", span: 4 },
      { src: "/getlinks.png", alt: "GetLinks", span: 4 },
      { src: "/simptek.png", alt: "SimpTek", span: 4 },
      { src: "/allin.png", alt: "Allin", span: 4 },
      { src: "/godo.png", alt: "GoDo", span: 4 },
      { src: "/woodbine.png", alt: "Woodbine", span: 5 },
      { src: "/uprc.png", alt: "UPRC", span: 5 },
      { src: "/kognitive_spark.png", alt: "Kognitive Spark", span: 5 },
      { src: "/riddl.png", alt: "Riddl", span: 5 },
      { src: "/servus.png", alt: "ServUs", span: 5 },
      {
        src: "/immigration_fredericton.png",
        alt: "Immigration Fredericton",
        span: 5,
      },
      { src: "/planet_hatch.png", alt: "Planet Hatch", span: 5 },
      { src: "/ignite_fredericton.png", alt: "Ignite Fredericton", span: 5 },
    ],
    []
  );

  return (
    <>
      {/* Meta */}
      <Head>
        <title>Design & Development | Book Sadprasid</title>
      </Head>

      {/* Page */}
      <div className="flex flex-col min-h-screen">
        <Nav />

        <main className="pb-2">
          {/* Intro */}
          <section className="pt-[130px] container bg-springWood max-h-[930px]">
            <div className="text-center">
              <h1 className="tag-sm">Design & Development</h1>

              <h2 className="text-[46px] font-quicksand font-500 mb-3">
                Book as a designer/developer.
              </h2>

              <p className="max-w-[650px] mx-auto mb-3">
                In 2017, my partner and I started a digital product company,
                Matcha Creative Inc. We help startups, social enterprises and
                non-profits create digital products and services - from web
                applications to digital marketing.
              </p>

              <img
                src="/hero_2.png"
                alt="Hero"
                height="800"
                className="mx-auto tablet:h-[800px] pl-6"
              />
            </div>
          </section>

          {/* Worked with */}
          <section className="container py-13">
            {/* Adding these so that PostCSS does not remove them. This is due
            to the lines below using them in a template string.*/}
            <div className="tablet:col-span-4 tablet:col-span-5">
              <h2 className="text-[30px] mb-6">Worked With :</h2>
              <div className="grid gap-x-4 gap-y-5 tablet:px-10 grid-cols-2 tablet:grid-cols-20">
                {gridLogos.map(({ src, alt, span }) => (
                  <div
                    className={`flex items-center justify-center h-[80px] tablet:col-span-${span}`}
                    key={alt}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Some of our work */}
          <section className="container">
            <div>
              <h2 className="tag-sm uppercase">Some of our work</h2>

              <div className="flex flex-col gap-y-6">
                <div>
                  <p className="font-quicksand text-[46px] font-500 leading-none mb-5">
                    Web Application
                  </p>
                  <img
                    src="/alchemy.png"
                    alt="Alchemy mobile application"
                    className="tablet:px-10"
                  />
                </div>

                <div>
                  <p className="font-quicksand text-[46px] font-500 leading-none mb-5">
                    Mobile Application
                  </p>
                  <img
                    src="/servus_dashboard.png"
                    alt="ServUs dashboard"
                    className="tablet:px-10"
                  />
                </div>

                <div>
                  <p className="font-quicksand text-[46px] font-500 leading-none mb-5">
                    Responsive Website
                  </p>
                  <img
                    src="simptek_website.png"
                    alt="SimpTek website"
                    className="tablet:px-10"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer mt={150} />
      </div>
    </>
  );
}
