import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Facebook, X } from "lucide-react";

export const Footer = () => {
  return (
    <div className="h-full w-full bg-black">
      <div className="h-full w-full max-w-screen-2xl mx-auto">
        <div className="h-full w-full pt-8 px-4 md:px-8 pb-4">
          <div className="flex items-start justify-start flex-wrap gap-x-20 gap-y-5 mb-5">
            <div className="space-y-3">
              {/* logo */}
              <div className="space-x-2.5 tracking-wide">
                <svg
                  width="28"
                  height="38"
                  viewBox="0 0 28 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[32px] w-auto inline-block"
                >
                  <path
                    d="M17.702 11.952C17.702 11.36 17.6527 10.7927 17.554 10.25C17.5047 9.70733 17.3567 9.23867 17.11 8.844C16.9127 8.4 16.592 8.05466 16.148 7.808C15.7533 7.512 15.186 7.364 14.446 7.364C14.0513 7.364 13.632 7.438 13.188 7.586C12.7933 7.68467 12.4233 7.882 12.078 8.178C11.8807 7.78333 11.7573 7.41333 11.708 7.068C11.6587 6.67333 11.634 6.27866 11.634 5.884C11.634 4.30533 12.3 2.998 13.632 1.962C14.964 0.925999 16.5673 0.407999 18.442 0.407999C21.402 0.407999 23.6713 1.17267 25.25 2.702C26.8287 4.182 27.618 6.328 27.618 9.14V38C26.4833 38 25.324 37.8767 24.14 37.63C23.0053 37.334 21.9447 36.8653 20.958 36.224C20.0207 35.5333 19.2313 34.6453 18.59 33.56C17.998 32.4253 17.702 30.9947 17.702 29.268V11.952ZM10.746 26.456C10.746 27.048 10.7707 27.6153 10.82 28.158C10.9187 28.7007 11.0667 29.194 11.264 29.638C11.5107 30.0327 11.8313 30.378 12.226 30.674C12.67 30.9207 13.262 31.044 14.002 31.044C14.3967 31.044 14.7913 30.9947 15.186 30.896C15.63 30.748 16.0247 30.526 16.37 30.23C16.5673 30.6247 16.6907 31.0193 16.74 31.414C16.7893 31.7593 16.814 32.1293 16.814 32.524C16.814 34.1027 16.148 35.41 14.816 36.446C13.484 37.482 11.8807 38 10.006 38C7.046 38 4.77667 37.2107 3.198 35.632C1.61933 34.0533 0.83 32.08 0.83 29.712V9.14C0.83 7.512 1.126 6.15533 1.718 5.07C2.35933 3.93533 3.14867 3.02266 4.086 2.332C5.07267 1.64133 6.13333 1.148 7.268 0.851997C8.452 0.555998 9.61133 0.407999 10.746 0.407999V26.456Z"
                    fill="#FF7500"
                  />
                </svg>
                <h1 className="text-2xl leading-[32px] align-middle inline-block font-medium text-white">
                  Altermate
                </h1>
              </div>
              {/* social handles */}
              <div className="flex items-center space-x-2">
                {socialHandles.map((socialHandle) => (
                  <a
                    key={socialHandle.name}
                    title={socialHandle.name}
                    href={socialHandle.href}
                    className="p-2 rounded-full bg-neutral-800 text-white"
                  >
                    {socialHandle.icon}
                  </a>
                ))}
              </div>
              {/* coppyright */}
              <p className="text-xs text-muted-foreground">2024, Altermate</p>
            </div>
            <div className="flex gap-x-10 gap-y-5 flex-wrap text-xs">
              {footerItems.map((footerItem) => (
                <div key={footerItem.name}>
                  <h4 className="text-muted-foreground font-normal text-sm">
                    {footerItem.name}
                  </h4>
                  <ul key={footerItem.name} className="pt-2 text-white font-extralight space-y-2">
                    {footerItem.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.href}
                          className="hover:text-altermateOrange tracking-wider"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-muted" />
          <div className="flex pt-4 pb-1 items-center justify-between gap-5 max-xs:flex-wrap">
            <div className="space-y-2">
              <h4 className="font-light text-sm">
                One step ahead in project based learning
              </h4>
              <p className="font-extralight text-xs text-white/50">
                Get mentors from the industry and learn projects
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="/" className="text-sm font-light text-white/75 hover:underline underline-offset-1">Privacy Policy</a>
              <a href="/" className="text-sm font-light text-white/75 hover:underline underline-offset-1">Terms of Service</a>
              <a href="/" className="text-sm font-light text-white/75 hover:underline underline-offset-1">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const socialHandles = [
  {
    name: "instagram",
    icon: <InstagramLogoIcon />,
    href: "https://www.instagram.com/bmayanksingh/?__pwa=1",
  },
  {
    name: "x",
    icon: <TwitterLogoIcon />,
    href: "https://x.com/",
  },
  {
    name: "linkedin",
    icon: <LinkedInLogoIcon />,
    href: "https://www.linkedin.com",
  },
];

const footerItems = [
  {
    name: "Platform",
    subItems: [
      {
        name: "Pricing",
        href: "/pricing",
      },
      {
        name: "AI tech stack helper",
        href: "ai-tech-stack/helper",
      },
    ],
  },
  {
    name: "Company",
    subItems: [
      {
        name: "About",
        href: "/about",
      },
      {
        name: "News",
        href: "/news",
      },
      {
        name: "Careers",
        href: "/careers",
      },
    ],
  },
];
