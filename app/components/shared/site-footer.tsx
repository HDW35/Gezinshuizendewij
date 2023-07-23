import {
  Anchor,
  ButtonIconAnchor,
  ThemeToggleDropdownMenu,
} from "~/components";
import { Map, Mail } from "~/icons";
import { cn, getCurrentYear } from "~/utils";

interface Props {
  noThemeToggle?: boolean;
}

export function SiteFooter({ noThemeToggle }: Props) {
  return (
    <footer
      className={cn(
        "bg-text-raised", // background
        "border-t-2 border-surface-100 dark:border-surface-800", // border
        "mt-60 py-4 sm:py-8"
      )}
    >
      <section className="contain flex flex-wrap items-end gap-4 sm:justify-between">
        <div className="space-y-4">
          <p className="opacity-80">
            <span>Copyright &copy; </span>
            <span>{getCurrentYear()} </span>
            <Anchor
              href={"https://gezinshuizendewij.nl"}
              className="py-3 font-semibold sm:py-0"
            >
              Gezinshuizen de Wij
            </Anchor>
          </p>
        </div>

        <div className="flex w-full justify-end gap-1 sm:w-min sm:gap-2">
          <ButtonIconAnchor
            href={'https://maps.google.com/?q=35 Olyhorststraat, Gendt, Netherlands'}
            variant="ghost"
            accent="dim"
          >
            <Map />
            <span className="sr-only">Google maps</span>
          </ButtonIconAnchor>

          <ButtonIconAnchor
            href={"mailto:info@gezinshuizendewij.nl"}
            variant="ghost"
            accent="dim"
          >
            <Mail />
            <span className="sr-only">Mail sturen</span>
          </ButtonIconAnchor>

          {!noThemeToggle && <ThemeToggleDropdownMenu align="end" />}
        </div>
      </section>
    </footer>
  );
}
