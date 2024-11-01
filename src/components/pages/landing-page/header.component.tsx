"use client";

import ThemeToggle, { ThemeToggleSwitch } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight, LucideDownload, Menu, Search, SidebarCloseIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.classList.toggle("backdrop-blur-lg", window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      id="navbar"
      className="h-full w-full min-h-14 sticky top-0 left-0 z-50 border-b bg-white/80 dark:bg-transparent"
    >
      <div className="h-full w-full max-w-screen-2xl mx-auto px-4 py-3">
        <div className="h-full w-full flex items-center justify-between">
          {/* Nav part - 1 */}
          <div className="w-fit h-full flex items-center gap-x-3">
            {/* Nav part - 1.1 (logo) */}
            <Link className="flex items-center gap-x-1.5 tracking-wide mr-2 hover:opacity-80" href="/">
              <svg
                width="28"
                height="38"
                viewBox="0 0 28 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[35px] w-auto"
              >
                <path
                  d="M17.702 11.952C17.702 11.36 17.6527 10.7927 17.554 10.25C17.5047 9.70733 17.3567 9.23867 17.11 8.844C16.9127 8.4 16.592 8.05466 16.148 7.808C15.7533 7.512 15.186 7.364 14.446 7.364C14.0513 7.364 13.632 7.438 13.188 7.586C12.7933 7.68467 12.4233 7.882 12.078 8.178C11.8807 7.78333 11.7573 7.41333 11.708 7.068C11.6587 6.67333 11.634 6.27866 11.634 5.884C11.634 4.30533 12.3 2.998 13.632 1.962C14.964 0.925999 16.5673 0.407999 18.442 0.407999C21.402 0.407999 23.6713 1.17267 25.25 2.702C26.8287 4.182 27.618 6.328 27.618 9.14V38C26.4833 38 25.324 37.8767 24.14 37.63C23.0053 37.334 21.9447 36.8653 20.958 36.224C20.0207 35.5333 19.2313 34.6453 18.59 33.56C17.998 32.4253 17.702 30.9947 17.702 29.268V11.952ZM10.746 26.456C10.746 27.048 10.7707 27.6153 10.82 28.158C10.9187 28.7007 11.0667 29.194 11.264 29.638C11.5107 30.0327 11.8313 30.378 12.226 30.674C12.67 30.9207 13.262 31.044 14.002 31.044C14.3967 31.044 14.7913 30.9947 15.186 30.896C15.63 30.748 16.0247 30.526 16.37 30.23C16.5673 30.6247 16.6907 31.0193 16.74 31.414C16.7893 31.7593 16.814 32.1293 16.814 32.524C16.814 34.1027 16.148 35.41 14.816 36.446C13.484 37.482 11.8807 38 10.006 38C7.046 38 4.77667 37.2107 3.198 35.632C1.61933 34.0533 0.83 32.08 0.83 29.712V9.14C0.83 7.512 1.126 6.15533 1.718 5.07C2.35933 3.93533 3.14867 3.02266 4.086 2.332C5.07267 1.64133 6.13333 1.148 7.268 0.851997C8.452 0.555998 9.61133 0.407999 10.746 0.407999V26.456Z"
                  fill="#FF7500"
                />
              </svg>
              <h1 className="text-xl font-semibold">Altermate</h1>
            </Link>
            {/* Nav part - 1.2 (navItems) */}
            <div className="w-fit space-x-3 max-sm:hidden">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="p-2">
                      Mentors
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-3 md:w-[400px]">
                        <ListItemLink href="/mentors/top" title="Top 10">
                          These mentors are the best among all (paid)
                        </ListItemLink>
                        <ListItem href="/project/create" title="Create project">
                          Build a new project to help others learn.
                        </ListItem>
                        <ListItem href="/mentors/apply" title="Be a mentor">
                          Apply to become a mentor.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="p-2">
                      Students
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-3">
                        <ListItem href="/projects" title="Projects">
                          Get started with your interest.
                        </ListItem>
                        <ListItem href="/teams" title="Teams">
                          Team work results in betterment
                        </ListItem>
                        <ListItemLink href="/docs" title="Docs" />
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {/* Nav part - 1.3 (searchbar) */}
            <div className="w-full min-w-fit lg:w-[300px] hidden md:block">
              <div className="md:border dark:border-neutral-700 rounded-full py-1 px-2 flex items-center gap-x-2">
                <Search className="text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for Projects, Products"
                  className="w-full h-fit -mb-1 font-extralight text-[14px] placeholder:text-muted-foreground tracking-wide text-ellipsis border-none focus-visible:ring-0 px-0"
                />
              </div>
            </div>
          </div>
          {/* Nav part - 2 (CTA) */}
          <div className="w-fit h-full flex md:flex-row-reverse items-center gap-x-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full max-xxs:hidden bg-transparent dark:bg-neutral-800 hover:bg-accent focus-visible:bg-accent dark:text-white border-neutral-300 dark:border-neutral-700 flex items-center shadow-none gap-x-1.5 px-4 focus-visible:ring-0"
            >
              <span className="font-normal">App</span>
              <LucideDownload className="scale-90 text-alt" />
            </Button>
            <ThemeToggle className="rounded-full bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:bg-accent max-sm:hidden" />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden items-center border-none shadow-none bg-transparent dark:hover:bg-neutral-800"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full pt-16">
                <div className="w-full h-full relative pb-40 space-y-5 min-h-screen overflow-scroll scroll-smooth no-scrollbar z-50">
                  {/* searchbar */}
                  <div className="w-full block">
                    <div className="border dark:border-neutral-700 rounded-full py-1 px-2 flex items-center gap-x-2">
                      <Search className="text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search for Projects, Products"
                        className="w-full h-fit -mb-1 font-extralight text-base placeholder:text-muted-foreground tracking-wide text-ellipsis border-none focus-visible:ring-0 px-0"
                      />
                    </div>
                  </div>
                  {/* theme */} 
                  <ThemeToggleSwitch />
                  {/* mentors */}
                  <div className="pb-5 tracking-wider">
                    <h2 className="font-normal text-lg">Mentors</h2>
                    <ul className="space-y-3 px-1 py-2">
                      <li className="px-4 h-12 flex items-center w-full rounded-lg border hover:bg-accent"><a href="/mentors/top" className="text-lg font-light">Top 10 <ArrowUpRight size={24} className="inline-block stroke-2" /></a></li>
                      <li className="px-4 h-12 flex items-center w-full rounded-lg border hover:bg-accent"><a href="/projects/create" className="text-lg font-light">Create project</a></li>
                      <li className="px-4 h-12 flex items-center w-full rounded-lg border hover:bg-accent"><a href="/mentors/apply" className="text-lg font-light">Be a mentor</a></li>
                    </ul>
                  </div>
                  {/* students */}
                  <div className="pb-5 tracking-wider">
                    <h2 className="font-normal text-lg">Students</h2>
                    <ul className="space-y-3 px-1 py-2">
                      <li className="px-4 h-12 flex items-center w-full rounded-lg border hover:bg-accent"><a href="/projects" className="text-lg font-light">Projects</a></li>
                      <li className="px-4 h-12 flex items-center w-full rounded-lg border hover:bg-accent"><a href="/teams" className="text-lg font-light">Teams</a></li>
                      <li className="px-4 h-12 flex items-center w-full rounded-lg border hover:bg-accent"><a href="/docs" className="text-lg font-light">Docs <ArrowUpRight size={24} className="inline-block stroke-2" /></a></li>
                    </ul>
                  </div>
                </div>
                  <div className="absolute bg-white dark:bg-black bottom-0 left-0 w-full h-fit p-4 flex items-center justify-center gap-5 flex-wrap z-[100]">
                    <SheetClose asChild>
                      <Button variant="outline" className="text-sm font-light">
                        close <ArrowRightIcon />
                      </Button>
                    </SheetClose>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-normal leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ListItemLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-normal leading-none">
            {title} <ArrowUpRight size={14} className="inline-block stroke-2" />
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItemLink.displayName = "ListItemLink";
