import Head from "next/head";
import { Nav, Footer } from "@components";

export default function AcademicAndResearch() {
  return (
    <>
      {/* Meta */}
      <Head>
        <title>Travel & Photography | Book Sadprasid</title>
      </Head>

      {/* Page */}
      <div className="flex flex-col min-h-screen">
        <Nav />

        <main className="container bg-springWood pt-[130px] pb-2 flex flex-col gap-y-12">
          {/* Intro */}
          <section className="w-full">
            <h1 className="tag-lg">Traveling & Photography</h1>

            <h2 className="text-[44px] font-quicksand font-500 mb-2">
              Book as a photographer.
            </h2>

            <p className="max-w-[500px] mb-8">
              I travel alone a lot in pre-social-media time. The only way to
              share memories from my trips was emailing photos. My black and
              white phone I owned at the time though, didn’t have a camera. So I
              invested in a camera and just never stopped since.
            </p>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-7">
              {[
                { src: "/tokyo_2018.png", alt: "Tokyo, 2018" },
                { src: "/toronto_2020.png", alt: "Toronto, 2020" },
                { src: "/ecuador_2017.png", alt: "Educator, 2017" },
                { src: "/bangkok_2015.png", alt: "Bangkok, 2015" },
                { src: "/kyoto_2016.png", alt: "Kyoto, 2016" },
                { src: "/seoul_2016.png", alt: "Seoul, 2016" },
                { src: "/toronto_2017.png", alt: "Toronto, 2017" },
                { src: "/fredericton_2018.png", alt: "Fredericton, 2018" },
                { src: "/seoul_2019.png", alt: "Seoul, 2019" },
                { src: "/osaka_2017.png", alt: "Osaka, 2017" },
                { src: "/fredericton_2020.png", alt: "Fredericton, 2020" },
                { src: "/fredericton_2018_2.png", alt: "Fredericton, 2018" },
              ].map(Photo)}
            </div>
          </section>
        </main>

        <Footer mt={100} hasBackground />
      </div>
    </>
  );
}

function Photo({ src, alt }) {
  return (
    <div className="flex flex-col">
      <img src={src} alt={alt} className="max-h-[550px] object-contain" />
      <p className="mt-1 text-right">{alt}</p>
    </div>
  );
}
