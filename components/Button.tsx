import { forwardRef, ReactElement, RefAttributes } from "react";

// Shared props between link and button props
type BaseProps = {
  /** Black/White version of the button */
  bw?: boolean;
  /** Only allow string children */
  children: string;
};

type LinkProps = {
  href?: string;
} & BaseProps;

type Props = LinkProps;

export const Button = forwardRef<HTMLLinkElement | HTMLButtonElement, Props>(
  ({ bw, children, ...otherProps }, ref) => {
    // Depending on the existence of the `href` props, render as an `a` tag.
    const Tag = "href" in otherProps ? "a" : "button";

    return (
      <Tag
        // @ts-ignore
        ref={ref}
        className="text-center text-16 text-white rounded-30 py-1 px-2 bg-gradient-to-r from-macaroniAndCheese to-sunshade min-w-[120px]"
        style={{
          ...(bw && {
            background:
              "linear-gradient(77.33deg, #E5E5E5 40.82%, #979797 80.52%)",
            color: "#555555",
          }),
        }}
        {...otherProps}
      >
        {children}
      </Tag>
    );
  }
);
Button.displayName = "Button";
