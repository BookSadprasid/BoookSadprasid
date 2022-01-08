import { Button } from "@components";
import Link from "next/link";

type FooterProps = {
  /** margin-top: <>px */
  mt: number;
  /** Show background */
  hasBackground?: boolean;
};

export function Footer({ mt, hasBackground }: FooterProps) {
  return (
    <footer
      className="container flex-grow"
      style={{
        background: hasBackground ? "#f7f6f1" : "",
      }}
    >
      <div
        className="pb-[150px] flex items-center justify-evenly"
        style={{
          paddingTop: mt,
        }}
      >
        <Link href="/">
          <a>
            <img src="/logo-bw.svg" alt="logo" />
          </a>
        </Link>

        {/* Social */}
        <div className="flex gap-2">
          {[
            { url: "https://github.com/BookSadprasid", icon: "/github.svg" },
            { url: "https://booksadprasid.medium.com/", icon: "/medium.svg" },
            {
              url: "https://www.linkedin.com/in/booksadprasid",
              icon: "/linkedin.svg",
            },
            {
              url: "https://twitter.com/booksadprasid",
              icon: "/twitter.svg",
            },
          ].map(({ url, icon }) => (
            <Link href={url} key={url.substring(1)}>
              <a target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={icon.split(/\/|.svg/)[1]} />
              </a>
            </Link>
          ))}
        </div>

        <Button bw href="mailto:booksadprasid@gmail.com">
          Say Hi!
        </Button>
      </div>
    </footer>
  );
}
