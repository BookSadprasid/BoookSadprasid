import Head from "next/head";
import { Nav, Footer } from "@components";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About Me | Book Sadprasid</title>
      </Head>

      <Nav />

      <main className="container bg-springWood pt-[130px] pb-2">
        <section className="grid grid-cols-1 tablet:grid-cols-2 gap-x-10">
          {/* Left */}
          <img
            src="/hero.png"
            alt="hero"
            width="600"
            className="mw-[600px] mx-auto tablet:ml-6"
          />
          {/* Right */}
          <div className="flex flex-col justify-center">
            <h1 className="tag-sm uppercase">About Me</h1>
            <h2 className="font-quicksand font-400 text-[44px] mb-3">
              {"Hi, I'm"} <b>Book!</b>
            </h2>
            <div className="flex flex-col gap-y-2 font-mulish text-18 leading-[22px]">
              <p>
                <b>In a nutshell</b>
                {
                  " -> I was born and raised in Bangkok, Thailand. I moved around the world from Bangkok -> Seoul -> Tokyo -> Svendborg and eventually Canada. I live and breathe for art, technology and microbiology."
                }
              </p>
              <p>
                <b>What I do now</b>
                {
                  " -> I’m a computer science/biology student at the University of New Brunswick. I work at the university’s Human Computer Interaction Lab on therapy games. Outside of work/school, I freelance UI design & development."
                }
              </p>
              <p>
                <b>What I used to do</b>
                {
                  " -> I graduated from St. Thomas University with a journalism/communications degree. I worked in the tech startup scene as a marketer for a little bit–then realized it really wasn’t for me. I don’t want to market the tech, I want to build it!!"
                }
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer mt={150} hasBackground />
    </div>
  );
}
