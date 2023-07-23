import { cva } from "class-variance-authority";

import { SiteHeader, SiteFooter } from "~/components";
import { cn } from "~/utils";

import type { VariantProps } from "class-variance-authority";
import headerImg from "../../../public/assets/images/Header_DEF.png";

export const layoutVariants = cva("", {
  variants: {
    // for the whole layout
    isSpaced: {
      true: "space-y-10",
      false: "",
    },
    // for the main content
    variant: {
      full: "",
      sm: "contain-sm",
      default: "contain",
    },
    containSize: {
      default: "",
      sm: "contain-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof layoutVariants> {
  layoutHeader?: React.ReactNode;
  noThemeToggle?: boolean;
}

// The site layout with short enough name
export function Layout({
  variant = "default",
  isSpaced = true,
  containSize = "default",

  className,

  noThemeToggle = false, // not a styling variant

  children,
}: Props) {
  return (
    <div className={cn("flex min-h-screen flex-col")}>
      <SiteHeader noThemeToggle={noThemeToggle} />

      <img src={headerImg} alt="Huizen" />

      <main
        className={cn(
          "grow",
          layoutVariants({ variant, isSpaced, containSize, className })
        )}
      >
        {children}
      </main>

      <SiteFooter noThemeToggle={noThemeToggle} />
    </div>
  );
}
