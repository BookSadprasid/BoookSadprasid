import Head from "next/head";
import Link from "next/link";
import { Nav, Footer } from "@components";

export default function AcademicAndResearch() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Academics & Research | Book Sadprasid</title>
      </Head>

      <Nav />

      <main className="container bg-springWood pt-[130px] pb-2">
        <section className="grid grid-cols-1 tablet:grid-cols-2 gap-x-10">
          {/* Left */}
          <div className="flex flex-col gap-y-5">
            <img
              src="/academics.png"
              alt="academics"
              className="hidden tablet:block"
            />
            <div className="text-18 flex flex-col gap-y-3">
              <h2 className="text-rose font-700">Awards</h2>
              <p>2021 CHI Play Student Game Design Competition - Best Game</p>
              <p>2021 NSERC Undergraduate Student Research Award</p>
              <p>
                2020 CHI Play 2020 Student Game Design Competition - Best
                Physical Experience
              </p>
              <p>2020 NSERC Undergraduate Student Research Award</p>
              <p>2019 EDAC Marketing Canada Awards - Best Website Design</p>
              <p>2018 CS Square Pitch Competition - Runner-up</p>
              <p>2018 EDAC Marketing Canada Awards - Best Website Design</p>
              <p>2018 Fredericton Startup Weekend - 1st Place Winner</p>
            </div>

            <div className="text-18 flex flex-col gap-y-3">
              <h2 className="text-rose font-700">Scholarship</h2>
              <p>2021 Kate Westman Scholarship($2000)</p>
              <p>2021 Edwin Jacob Special University Scholarship($2100)</p>
              <p>2021 Teck Resources Scholarship($1900)</p>
              <p>2020 Dr. Jane Fritz Scholarship($3000)</p>
              <p>2020 Edwin Jacob Special University Scholarship($3000)</p>
              <p>2019 Government of Thailand STEM Scholarship($5000)</p>
              <p>2014 St. Thomas University President’s Scholarship($16000)</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-y-5 order-first tablet:order-none">
            {/* Mobile Image */}
            <img
              src="/academics.png"
              alt="academics"
              className="tablet:hidden"
            />

            {/* Intro */}
            <div>
              <h1 className="tag-sm uppercase">Academics & Research</h1>
              <p className="font-quicksand font-400 text-[44px] mb-2 leading-[1]">
                {"Hi, I'm"} <b>Book!</b>
              </p>
              <p>
                I’m a computer science/biology student at University of New
                Brunswick. My research interest is in Human Computer
                Interaction, Assistive Technology, and Serious Game.
              </p>
            </div>

            {/* Education */}
            <div className="text-18 flex flex-col gap-y-3">
              <h2 className="text-rose font-700">Education</h2>
              <p>
                <b>2014-2017 Bachelor of Arts</b>
                <br />
                Major: Journalism, Communications and Public Policy
                <br />
                Minor: Economics
                <br />
                <br />
                <p>St. Thomas University, Fredericton, NB, Canada</p>
              </p>

              <p>
                <b>
                  2019-present Bachelor or Computer Science & Bachelor of
                  Science
                </b>
                <br />
                <br />
                University of New Brunswick, Fredericton, NB, Canada
                <br />
                CGPA: 4.2/4.3
              </p>

              <p>
                <b>AREA(s) OF ACADEMIC INTEREST</b>
                <br />
                Human-Computer Interaction, Assistive Technology, and Serious
                Game
              </p>
            </div>

            {/* Publications */}
            <div className="text-18 flex flex-col gap-y-3">
              <h2 className="text-rose font-700">Publications</h2>
              <p>
                Book Sadprasid, Ethan Eddy, Aaron Tabor, Erik Scheme, and Scott
                Bateman. 2021. Percussion Hero: A Chest Physical Therapy Game
                for People with Cystic Fibrosis and their Caregivers. Extended
                Abstracts of the 2021 Annual Symposium on Computer-Human
                Interaction in Play, Association for Computing Machinery,
                361–367.
              </p>

              <p>
                Aaron Tabor, Scott Bateman, Erik Scheme, Book Sadprasid, and
                m.c. schraefel. 2021. Understanding the Design and Effectiveness
                of Peripheral Breathing Guide Use During Information Work. In
                Proceedings of the 2021 CHI Conference on Human Factors in
                Computing Systems. Association for Computing Machinery, New
                York, NY, USA, 1–13.
              </p>

              <p>
                Aaron Tabor, Reyhan Pradantyo, Book Sadprasid, Max V. Birk, Erik
                Scheme, and Scott Bateman. 2020. Bubble Breather - A Breathing
                Exercise Game to Support Pneumonia Rehabilitation and Recovery.
                Extended Abstracts of the 2020 Annual Symposium on
                Computer-Human Interaction in Play, Association for Computing
                Machinery, 86–90.
              </p>
            </div>

            {/* Research Experience */}
            <div className="text-18 flex flex-col gap-y-3">
              <h2 className="text-rose font-700">Research Experience</h2>
              <div className="grid grid-cols-2 gap-x-1">
                <p>May 2021 - present</p>
                <p>
                  Research Assistant
                  <br />
                  Human-Computer Interaction Lab,
                  <br />
                  Faculty of Computer Science,
                  <br />
                  University of New Brunswick
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-1">
                <p>May - Sept. 2020</p>
                <p>
                  Research Assistant
                  <br />
                  Human-Computer Interaction Lab,
                  <br />
                  Faculty of Computer Science,
                  <br />
                  University of New Brunswick
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-1">
                <p>Jan. - April 2020</p>
                <p>
                  Laboratory Assistant | Durnford Lab Department of Biology,
                  <br />
                  University of New Brunswick
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-1">
                <p>Sept. - Dec. 2019</p>
                <p>
                  X-Reality Researcher
                  <br />
                  Gérard V. La Forest Law Library
                  <br />
                  Faculty of Law,
                  <br />
                  University of New Brunswick
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer mt={150} hasBackground />
    </div>
  );
}
