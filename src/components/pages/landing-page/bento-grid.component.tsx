import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

export async function BentoGridSection() {
  return (
    <div className="h-full w-full text-white bg-black dark:bg-transparent md:dark:bg-gradient-to-b dark:from-black dark:via-black/60 to-transparent">
      <div className="relative h-full w-full max-w-screen-2xl mx-auto  px-6 py-6 md:py-14 z-0">
      <div className="absolute -top-[90px] -left-3 max-lg:hidden -z-10">
        <svg
          width="646"
          height="421"
          viewBox="0 0 646 421"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M643.421 91.2661C269.922 276.223 263.571 -102.541 132.529 31.3623C49.7278 115.971 27.4196 308.743 2.0676 419.276"
            stroke="#FF5100"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="w-full lg:w-4/5 xl:w-3/5 max-w-screen-xl mx-auto h-full py-8">
        {/* <h1 className="w-full mb-6 text-2xl lg:text-4xl leading-[1.2]">
            Our Amazing <br />
            Features
            <LuArrowUpRight className="inline-block stroke-1 text-[#FF7500] text-3xl lg:text-[60px]" />
          </h1> */}
        <BentoGrid className="md:grid-rows-4 w-full z-0">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
      </div>
    </div>
  );
}

const features = [
  {
    Icon: (
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 origin-left transform-gpu text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75"
      >
        <path
          d="M42.2532 35.5063C45.9065 36.1197 49.9332 35.4797 52.7598 33.5863C56.5198 31.0797 56.5198 26.973 52.7598 24.4663C49.9065 22.573 45.8265 21.933 42.1732 22.573M15.6665 35.5063C12.0132 36.1197 7.98651 35.4797 5.15984 33.5863C1.39984 31.0797 1.39984 26.973 5.15984 24.4663C8.01318 22.573 12.0932 21.933 15.7465 22.573M44.9998 16.093C44.832 16.0663 44.661 16.0663 44.4932 16.093C42.7135 16.0287 41.0286 15.2749 39.7945 13.991C38.5604 12.7072 37.8738 10.9938 37.8798 9.21301C37.8798 5.39967 40.9465 2.33301 44.7598 2.33301C46.5845 2.33301 48.3345 3.05786 49.6247 4.34811C50.915 5.63836 51.6398 7.38832 51.6398 9.21301C51.635 10.9951 50.9412 12.7062 49.7036 13.9885C48.4661 15.2708 46.7806 16.0249 44.9998 16.093ZM12.9198 16.093C13.0798 16.0663 13.2665 16.0663 13.4265 16.093C15.2062 16.0287 16.8911 15.2749 18.1252 13.991C19.3593 12.7072 20.0459 10.9938 20.0398 9.21301C20.0398 5.39967 16.9732 2.33301 13.1598 2.33301C11.3352 2.33301 9.5852 3.05786 8.29495 4.34811C7.0047 5.63836 6.27984 7.38832 6.27984 9.21301C6.30651 12.9463 9.23984 15.9597 12.9198 16.093ZM28.9998 36.013C28.832 35.9863 28.661 35.9863 28.4932 36.013C26.7135 35.9487 25.0286 35.1949 23.7945 33.911C22.5604 32.6272 21.8738 30.9138 21.8798 29.133C21.8798 25.3197 24.9465 22.253 28.7598 22.253C30.5845 22.253 32.3345 22.9779 33.6247 24.2681C34.915 25.5584 35.6398 27.3083 35.6398 29.133C35.6132 32.8663 32.6798 35.9063 28.9998 36.013ZM21.2398 44.413C17.4798 46.9197 17.4798 51.0263 21.2398 53.533C25.5065 56.3863 32.4932 56.3863 36.7598 53.533C40.5198 51.0263 40.5198 46.9197 36.7598 44.413C32.5198 41.5863 25.5065 41.5863 21.2398 44.413Z"
          stroke="#4A4848"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Personal team space",
    content: (
      <h3 className="text-lg font-semibold text-neutral-300 dark:text-neutral-300">
        A <span className="text-[#FF7500]">Personal Team Space</span> for chats
        and fun.
      </h3>
    ),
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "h-[225px] min-h-fit md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3",
  },
  {
    Icon: (
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 origin-left transform-gpu text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75"
      >
        <path
          d="M55.6673 31.6663V20.9997C55.6673 7.66634 50.334 2.33301 37.0007 2.33301H21.0007C7.66732 2.33301 2.33398 7.66634 2.33398 20.9997V36.9997C2.33398 50.333 7.66732 55.6663 21.0007 55.6663H31.6673"
          stroke="#4A4848"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5469 35.6404L22.8935 27.4004C23.8002 26.227 25.4802 26.0137 26.6535 26.9204L31.5335 30.7604C32.7069 31.667 34.3869 31.4537 35.2935 30.307L41.4535 22.3604M48.9469 39.187L49.6935 40.707C50.0669 41.4537 51.0002 42.147 51.8269 42.307L52.8402 42.467C55.8802 42.9737 56.6002 45.2137 54.4135 47.427L53.4802 48.3604C52.8669 49.0004 52.5202 50.227 52.7069 51.0804L52.8402 51.6404C53.6669 55.3204 51.7202 56.7337 48.5202 54.8137L47.8269 54.4137C47.0002 53.9337 45.6669 53.9337 44.8402 54.4137L44.1469 54.8137C40.9202 56.7604 38.9735 55.3204 39.8269 51.6404L39.9602 51.0804C40.1469 50.227 39.8002 49.0004 39.1869 48.3604L38.2535 47.427C36.0669 45.2137 36.7869 42.9737 39.8269 42.467L40.8402 42.307C41.6402 42.1737 42.6002 41.4537 42.9735 40.707L43.7202 39.187C45.1602 36.2804 47.5069 36.2804 48.9469 39.187Z"
          stroke="#4A4848"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "mentor",
    content: (
      <h3 className="text-lg font-semibold text-neutral-300 dark:text-neutral-300">
        Get help from <span className="text-[#FF7500]">Industry mentors</span>{" "}
        anytime. <br />& apply to be one.
      </h3>
    ),
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "h-[225px] min-h-fit md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3",
  },
  {
    Icon: (
      <svg
        width="47"
        height="49"
        viewBox="0 0 47 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 origin-left transform-gpu text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75"
      >
        <path
          d="M35.3842 23.0133C36.6967 23.4306 38.1558 23.7959 39.7779 24.1347C38.1546 24.4737 36.6945 24.8394 35.3813 25.2571C32.4571 26.1872 30.1646 27.4044 28.3724 29.2483C26.5828 31.0895 25.4057 33.4387 24.5059 36.4329C24.1194 37.7189 23.7788 39.1428 23.4624 40.7198C23.1458 39.1416 22.8049 37.7167 22.418 36.4299C21.5176 33.4353 20.3398 31.0863 18.5498 29.2456C16.7571 27.4021 14.4644 26.1857 11.5406 25.2561C10.2281 24.8388 8.76902 24.4735 7.14692 24.1348C8.77024 23.7957 10.2303 23.4301 11.5435 23.0124C14.4677 22.0822 16.7602 20.865 18.5524 19.0211C20.342 17.1799 21.5191 14.8307 22.4189 11.8365C22.8054 10.5505 23.146 9.12659 23.4624 7.54961C23.779 9.12782 24.1199 10.5527 24.5068 11.8395C25.4072 14.8341 26.585 17.1831 28.375 19.0238C30.1677 20.8673 32.4604 22.0837 35.3842 23.0133Z"
          stroke="#4A4848"
          strokeWidth="3"
        />
      </svg>
    ),
    name: "Fred",
    content: (
      <h3 className="text-lg font-semibold text-neutral-300 dark:text-neutral-300">
        Ideal techstack with <span className="text-altermateOrange">Fred - Our Proud,</span> an AI model always in your service.
      </h3>
    ),
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "h-[225px] min-h-fit md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5",
  },
  {
    Icon: (
      <svg
        width="52"
        height="58"
        viewBox="0 0 52 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 origin-left transform-gpu text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75"
      >
        <path
          d="M50 15.6683V42.335C50 50.335 46 55.6683 36.6667 55.6683H15.3333C6 55.6683 2 50.335 2 42.335V15.6683C2 7.66829 6 2.33496 15.3333 2.33496H36.6667C46 2.33496 50 7.66829 50 15.6683Z"
          stroke="#4A4848"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.6673 9.00195V14.3353C32.6673 17.2686 35.0673 19.6686 38.0007 19.6686H43.334M15.334 31.6686H26.0007M15.334 42.3353H36.6673"
          stroke="#4A4848"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Notifications",
    content: (
      <h3 className="text-lg font-semibold text-neutral-300 dark:text-neutral-300">
        Get <span className="text-altermateOrange">notified</span> when something of your <span className="text-altermateOrange">interest.</span>
      </h3>
    ),
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "h-[225px] min-h-fit md:col-start-3 md:col-end-3 md:row-start-3 md:row-end-5",
  },
];
