/* eslint-disable tailwindcss/no-arbitrary-value */
import {
  ButtonIcon,
  buttonVariants,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icon,
  Logo,
  RemixNavLink,
  ThemeToggleButton,
} from "~/components";
import { configSite } from "~/configs";
import { Menu } from "~/icons";
import { cn } from "~/utils";

interface Props {
  noThemeToggle?: boolean;
}

export function SiteHeader({ noThemeToggle }: Props) {
  return (
    <header
      className={cn(
        "bg-text-raised", // background text
        "border-b-2 border-surface-100 dark:border-surface-800", // border
        "sticky left-0 right-0 top-0 z-40", // to work with the layout and nprogress
        "w-full py-4"
      )}
    >
      <section
        className={cn(
          "h-6", // height of the site header
          "contain flex items-center justify-between",
          "gap-1 sm:gap-2"
        )}
      >
        <div
          id="site-header-left"
          className="flex w-full items-center gap-1 sm:gap-2"
        >
          <HeaderMainLogo noThemeToggle={noThemeToggle} />
          <HeaderMainNavigation navItems={configSite?.navItems} />
          <div className="hidden w-full lg:flex"></div>
        </div>

        <div
          id="site-header-right"
          className="flex items-center gap-1 sm:gap-2"
        >
          <div className="flex lg:hidden">
            <HeaderNavigationMenu navItems={configSite?.navItems} />
          </div>
        </div>
      </section>
    </header>
  );
}

export function HeaderMainLogo({ noThemeToggle }: { noThemeToggle?: boolean }) {
  return (
    <div className="flex min-w-fit items-center gap-1">
      <RemixNavLink
        to="/"
        className="block min-w-fit transition-opacity hover:opacity-80"
        preventScrollReset
      >
        <Logo accent="brand" />
      </RemixNavLink>

      {!noThemeToggle && <ThemeToggleButton />}
    </div>
  );
}

export function HeaderMainNavigation({
  navItems = configSite.navItems,
}: {
  navItems?: typeof configSite.navItems;
}) {
  return (
    <nav className="hidden gap-1 lg:flex">
      {navItems?.map(
        (item, index) =>
          item?.to && (
            <RemixNavLink
              key={index}
              to={item.to}
              prefetch="intent"
              preventScrollReset
              className={({ isActive }) =>
                cn(buttonVariants({ variant: "navlink", isActive }))
              }
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name={item.icon} />
                <span className="whitespace-nowrap">{item.name}</span>
              </div>
            </RemixNavLink>
          )
      )}
    </nav>
  );
}

export function HeaderNavigationMenu({
  navItems = configSite.navItems,
  align = "end",
}: {
  navItems?: typeof configSite.navItems;
  align?: "center" | "start" | "end" | undefined;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ButtonIcon variant="outline">
          <Menu className="size-md" />
          <span className="sr-only font-bold">Menu</span>
        </ButtonIcon>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={align} className="w-56 overflow-scroll">
        <DropdownMenuLabel>
          <RemixNavLink
            to="/"
            prefetch="intent"
            className="transition-opacity hover:opacity-80"
          >
            <Logo size="sm" accent="brand" />
          </RemixNavLink>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {navItems?.map(
          (item, index) =>
            item.to && (
              <DropdownMenuItem key={index} asChild>
                <RemixNavLink to={item.to} prefetch="intent" preventScrollReset>
                  <div className={cn("flex gap-2")}>
                    <Icon name={item.icon} />
                    <span>{item.name}</span>
                  </div>
                </RemixNavLink>
              </DropdownMenuItem>
            )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
