import React from "react";
import { Header } from "./header.component";
import { HeroSection } from "./hero-section.component";
import { BentoGridSection } from "./bento-grid.component";
import { ExperienceSection } from "./experience.component";
import { FaqSection } from "./faq.component";
import { Footer } from "./footer.component";

export const LandingPageContainer = () => {
  return (
    <div className="h-full min-h-screen w-full bg-white dark:bg-transparent">
      <div className="relative h-full min-h-fit w-full tracking-wide z-0">
        <div className="fixed bottom-0 left-0 right-0 top-0 -z-[1] dark:bg-[radial-gradient(circle_300px_at_50%_200px,#3e3e3e,transparent)]" />
        {/* Content */}
        <Header />
        <main>
          <HeroSection />
          <BentoGridSection />
          <ExperienceSection />
          <FaqSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
