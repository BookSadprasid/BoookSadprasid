import Head from "next/head";
import { Nav, Footer } from "@components";

export default function AcademicAndResearch() {
  return (
    <>
      {/* Meta */}
      <Head>
        <title>Artwork & Creations | Book Sadprasid</title>
      </Head>

      {/* Page */}
      <div className="flex flex-col min-h-screen">
        <Nav />

        <main className="container bg-springWood pt-[130px] pb-2 flex flex-col gap-y-12">
          {/* Intro */}
          <section className="w-full">
            <h1 className="tag-lg">Artwork & Creations</h1>

            <h2 className="text-[44px] font-quicksand font-500 mb-2">
              Book as an artist.
            </h2>

            <p className="max-w-[500px]">
              Art is my medium of expressions. Creations are the results of my
              imaginations. Here are some of my favourite projects over the
              years!
            </p>
          </section>

          {/* Art Battle 2018 & 2020 */}
          <section
            style={{
              marginTop: "30px", // Move up the first section
            }}
            className="w-full"
          >
            <h2 className="font-quicksand font-500 text-[36px] mb-3">
              Art Battles 2018 & 2020
            </h2>

            <img
              src="/art_battle_main.png"
              alt="Painting on floor being painted"
              className="mb-4"
            />

            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
              <img
                src="/art_battle_1.png"
                alt="Close up shot of painting"
                className="w-full"
              />
              <img
                src="/art_battle_2.png"
                alt="Portrait shot after event"
                className="w-full"
              />
              <img
                src="/art_battle_3.png"
                alt="Painting in progress at event"
                className="w-full"
              />
            </div>
          </section>

          {/* Digital Paintings */}
          <section className="w-full">
            <h2 className="font-quicksand font-500 text-[36px] mb-3">
              Digital Painting
            </h2>

            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
              <img src="/rosie.png" alt="Painting of dog" className="w-full" />
              <img src="/book.png" alt="Self Portrait" className="w-full" />
              <img
                src="/blue-swimwear.png"
                alt="Painting of blue swimwear"
                className="w-full"
              />
            </div>
          </section>

          {/* Cloud Lamps */}
          <section className="w-full">
            <h2 className="font-quicksand font-500 text-[36px] mb-3">
              Cloud Lamps
            </h2>

            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
              <img
                src="/cloud_lamp_1.png"
                alt="Hanging and lit cloud lamp with a person underneath"
                className="w-full"
              />
              <img
                src="/cloud_lamp_2.png"
                alt="Hanging and lit cloud
              lamp"
                className="w-full"
              />
              <img
                src="/cloud_lamp_3.png"
                alt="Studio with cloud lamps"
                className="w-full"
              />
            </div>
          </section>

          {/* High-flow acrylic paintings */}
          <section className="w-full">
            <h2 className="font-quicksand font-500 text-[36px] mb-3">
              High-flow acrylic paintings
            </h2>

            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
              <img
                src="/high_flow_acrylic_1.png"
                alt="Portrait shot of painting"
                className="w-full"
              />
              <img
                src="/high_flow_acrylic_2.png"
                alt="Landscape shot of two paintings"
                className="w-full"
              />
              <img
                src="/high_flow_acrylic_3.png"
                alt="On the floor painting"
                className="w-full"
              />
            </div>
          </section>
        </main>

        <Footer mt={100} hasBackground />
      </div>
    </>
  );
}
