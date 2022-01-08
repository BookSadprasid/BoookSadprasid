import { Footer, Nav } from "@components";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Book Sadprasid | Coming Soon</title>
      </Head>

      <Nav />

      <main className="container bg-springWood flex-grow flex items-center">
        <h1 className="text-center font-quicksand font-500 text-[46px] mb-3">
          Coming Soon
        </h1>
      </main>

      <Footer mt={150} />
    </div>
  );
}
