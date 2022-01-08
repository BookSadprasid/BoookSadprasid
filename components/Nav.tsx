import { Button } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function Nav() {
  const { pathname } = useRouter();

  // Only show the nav links when not on the homepage
  const showNavLinks = pathname !== "/";

  const navLinks = useMemo(
    () => [
      { url: "/about-me", content: "About Me" },
      { url: "/design-and-development", content: "Design & Development" },
      { url: "/artwork-and-creations", content: "Artwork & Creations" },
      { url: "/academics-and-research", content: "Academics & Research" },
    ],
    []
  );

  return (
    <div className="container bg-springWood">
      <nav className="pt-6 pb-2 flex justify-between">
        {/* Icon */}
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" className="hidden tablet:block" />
          </a>
        </Link>
        {/* Nav + Button */}
        <div className="flex flex-row gap-x-5 items-center text-18">
          {showNavLinks &&
            navLinks.map(({ url, content }) => (
              <Link href={url} key={content}>
                <a
                  style={{
                    color: pathname === url ? "#E350CB" : "inherit",
                  }}
                >
                  {content}
                </a>
              </Link>
            ))}
          <div className="hidden tablet:flex flex-col justify-center">
            <Button href="mailto:booksadprasid@gmail.com">Say Hi!</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
