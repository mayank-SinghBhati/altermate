import { Button } from "@/components/ui/button";
export const ExperienceSection = () => {
  return (
    <div className="h-full min-h-fit w-full max-w-screen-2xl mx-auto">
      <div className="h-full w-full py-16 px-4">
        <div className="h-full w-full flex items-center justify-center gap-14 flex-wrap">
          {/* Typography presentation */}
          <div className="w-fit h-fit max-lg:text-center">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-wider leading-[1.5] mb-2">
              List yourself as Mentor <br />
              with your <span className="text-altermateOrange">experience</span>
            </h1>
            <p className="text-sm text-black/40 dark:text-white/40 mb-4">
              Mentor students with project on your experience
            </p>
            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-altermateOrange hover:bg-[#FF6800] text-white font-light tracking-wider"
            >
              Join the waitlist
            </Button>
          </div>
          {/* Graphical presentation */}
          <div className="h-fit w-fit sm:min-w-[400px] max-sm:scale-80 flex flex-col items-center p-8 rounded-[45px] bg-[#FBE6D9] dark:text-black">
            <img
              src="/avatarImage.svg"
              alt="image"
              className="h-[120px] w-[120px] bg-blue-400 object-cover rounded-full mb-4"
            />
            <div className="text-center mb-4 w-fit">
              <h1 className="font-normal text-3xl">Mayank</h1>
              <p className="font-light text-sm">SEO developer</p>
            </div>
            <div className="flex items-center justify-center gap-8 p-6 rounded-[30px] bg-[#FF9B69] max-xxs:flex-col">
              <div className="flex flex-col items-start max-xxs:items-center">
                <small className="text-xs font-normal">Ratings</small>
                <p className="font-medium text-3xl">8.9/10</p>
              </div>
              <div className="flex flex-col items-end max-xxs:items-center">
                <small className="text-xs font-normal">Mentored</small>
                <p className="font-medium text-3xl">100+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
