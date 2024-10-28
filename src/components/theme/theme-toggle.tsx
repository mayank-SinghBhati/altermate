"use client";
import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { LucideMoonStar, LucideSun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "../ui/switch";

const ThemeToggle = ({className= "", variant = "outline", size="icon"}: {className?: string, variant?: "default" | "outline" | "ghost" | "link"; size?: "sm" | "default" | "icon" | "lg";}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(className)}
    >
      {theme === "light" ? (
        <LucideSun size={20} /> 
      ) : (
        <LucideMoonStar size={20} />
      )}
    </Button>
  );
};


export const ThemeToggleSwitch = ({className=""}: {className?: string}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    // <div className="inline-flex items-center justify-between gap-2 w-full p-4 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
    //   <p className="">{theme === "light" ? "Dark mode" : "Light mode"}</p>
    // </div>
    <Button variant="outline" size="lg" className={cn(className, "justify-between rounded-lg px-4 h-12 w-full dark:hover:bg-neutral-800")}>
      <p className="text-sm font-light tracking-wider">Dark mode</p>
      <Switch checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")} />
    </Button>
  )
}

export default ThemeToggle;