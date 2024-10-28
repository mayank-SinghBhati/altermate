"use client";
import { FredAiLogo, WishListMail } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";

export const HeroSection = () => {
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div className="h-full w-full min-h-fit">
      <div className="relative h-full w-full max-w-screen-2xl mx-auto px-4 py-12 sm:py-16">
        <div className="absolute max-xl:hidden top-0 right-0 h-full -z-[1] scale-100 content-stretch">
        <svg width="422" height="379" viewBox="0 0 422 379" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C371.484 162.143 -19.9011 353.228 181.591 375.377C246.542 382.517 333.35 365.177 419.685 341.503" stroke="#FF5100" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
        <div className="h-full w-full flex flex-col items-center">
          {/* Badge */}
          <div className="w-fit h-fit p-[1.5px] dark:p-px rounded-full bg-[linear-gradient(55deg,_#4ade80,_#c084fc,_#f472b6,_#facc15,_#f87171,_#f87171)] mb-8">
            <div className="px-5 py-2.5 bg-white dark:bg-black rounded-full flex items-center justify-center gap-x-2">
              <FredAiLogo size={18} className="dark:fill-white" />
              <strong className="text-sm font-light tracking-widest">
                Fred 1.0 is here
              </strong>
            </div>
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider text-center w-fit mx-auto mb-6 space-y-1.5">
            <h1>Take a Jump</h1>
            <h1>in project based</h1>
            <h1>learning</h1> 
          </div>
          <form onSubmit={formSubmit}>
            <div className="border-2 border-input dark:border-neutral-700 py-1 pl-3 px-2 rounded-full flex items-center justify-center gap-x-2">
              <WishListMail className="stroke-[1.5px] stroke-muted-foreground dark:stroke-neutral-300" />
              <Input
                type="text"
                placeholder="Join the waitlist"
                className="focus-visible:ring-0 shadow-none border-none px-2 text-base font-light tracking-widest text-ellipsis"
              />
              <Button type="submit" className="rounded-full px-6 bg-altermateOrange hover:bg-[#FF6800] focus-visible:ring-0 focus-visible:bg-[#FF6800]"><ArrowRightIcon className="scale-150" /></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
