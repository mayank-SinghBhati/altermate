"use client"; 

import { Footer } from "@/components/pages/landing-page/footer.component";
import { Header } from "@/components/pages/landing-page/header.component";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-transparent relative z-0">
      <div className="fixed bottom-0 left-0 right-0 top-0 -z-[1] dark:bg-[radial-gradient(circle_300px_at_50%_200px,#3e3e3e,transparent)]" />
      <div className="h-full min-h-screen w-full max-w-screen-2xl mx-auto flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col gap-y-8 items-center justify-center px-4 py-12 min-h-fit h-full w-full">
          <SvgImage size={300} />
          <h1 className="font-medium text-2xl text-center">Page not found</h1>
          <Button
            variant="secondary"
            size="default"
            className=""
            onClick={() => window.history.back()}
          >
            <ArrowLeft /> Go Back
          </Button>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default NotFound;

function SvgImage({ size = 483 }: { size: number }) {
  return (
    <svg
      width={size - 50}
      height={size}
      viewBox="0 0 438 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow"
    >
      <path
        d="M280.063 295.605C279.005 295.925 277.976 296.285 276.976 296.698C276.439 296.915 275.863 297.018 275.284 296.999C274.705 296.979 274.136 296.839 273.615 296.586C273.093 296.334 272.63 295.975 272.256 295.533C271.882 295.09 271.605 294.574 271.443 294.018L254.923 238.513L66.7715 294.506L111.628 445.242C113.198 450.51 116.797 454.94 121.632 457.556C126.468 460.172 132.144 460.76 137.413 459.192L285.835 415.015C291.104 413.445 295.533 409.847 298.149 405.011C300.765 400.176 301.354 394.5 299.785 389.23L289.183 353.593C289.015 353.038 288.966 352.454 289.037 351.879C289.109 351.305 289.3 350.751 289.598 350.254C289.897 349.758 290.296 349.329 290.77 348.996C291.244 348.663 291.783 348.433 292.351 348.32C293.423 348.12 294.485 347.864 295.53 347.553C311.108 342.903 320.269 327.528 316.003 313.177C311.736 298.825 295.641 290.972 280.063 295.605Z"
        fill="#F9B999"
      />
      <g style={{ mixBlendMode: "multiply", opacity: "0.25" }}>
        <path
          d="M229.741 437.173C229.741 437.173 147.421 460.279 129.291 446.863C114.016 435.586 113.312 423.961 91.631 378.093C91.3868 417.619 112.958 482.489 112.958 482.489L229.741 437.173Z"
          fill="#F9B999"
        />
      </g>
      <g style={{ mixBlendMode: "multiply", opacity: "0.25" }}>
        <path
          d="M136.9 281.097C136.9 281.097 144.934 319.553 174.049 310.892C203.165 302.231 188.837 265.629 188.837 265.629L136.9 281.097Z"
          fill="#F9B999"
        />
      </g>
      <path
        d="M204.154 67.9219L35.8588 117.993C30.5905 119.561 26.1612 123.159 23.545 127.993C20.9288 132.828 20.3401 138.503 21.9083 143.772L66.7708 294.507L131.338 275.325C131.848 275.171 132.385 275.126 132.913 275.191C133.442 275.257 133.951 275.432 134.407 275.705C134.864 275.979 135.259 276.345 135.566 276.78C135.874 277.215 136.087 277.709 136.192 278.231C136.382 279.2 136.622 280.169 136.913 281.138C141.563 296.71 156.937 305.877 171.283 301.604C185.629 297.332 193.511 281.26 188.872 265.67C188.582 264.705 188.256 263.758 187.884 262.839C187.69 262.345 187.601 261.816 187.622 261.286C187.644 260.755 187.776 260.235 188.009 259.758C188.242 259.282 188.573 258.859 188.978 258.516C189.384 258.174 189.857 257.92 190.366 257.771L254.934 238.554L204.154 67.9219Z"
        fill="#72FEAC"
      />
      <g style={{ mixBlendMode: "multiply", opacity: "0.52" }}>
        <path
          d="M45.3217 233.426C45.3217 233.426 22.2394 151.107 35.6261 132.977C46.9085 117.701 66.8751 108.761 90.4573 101.739C50.9309 101.495 0 116.643 0 116.643L45.3217 233.426Z"
          fill="#72FEAC"
        />
      </g>
      <path
        d="M204.153 67.9211L218.609 116.492C218.843 117.266 218.909 118.08 218.802 118.882C218.695 119.683 218.418 120.452 217.989 121.137C217.56 121.822 216.989 122.407 216.315 122.853C215.641 123.299 214.879 123.596 214.081 123.723C212.574 123.947 211.084 124.278 209.623 124.711C194.051 129.361 184.884 144.736 189.156 159.088C193.429 173.439 209.501 181.309 225.085 176.677C226.546 176.244 227.974 175.704 229.357 175.061C230.094 174.736 230.892 174.572 231.697 174.58C232.503 174.588 233.298 174.767 234.028 175.106C234.759 175.445 235.409 175.935 235.936 176.545C236.462 177.154 236.853 177.869 237.082 178.641L254.898 238.512L316.356 220.214C318.117 219.677 319.595 218.464 320.466 216.842C321.337 215.219 321.531 213.318 321.006 211.553L320.953 211.379C316.303 195.801 324.197 179.711 338.543 175.444C352.888 171.178 368.281 180.339 372.913 195.917L372.966 196.085C373.493 197.855 374.701 199.344 376.325 200.224C377.949 201.105 379.855 201.305 381.626 200.782L423.187 188.413C428.456 186.844 432.885 183.246 435.501 178.412C438.117 173.577 438.706 167.902 437.138 162.633L398.193 31.766C396.624 26.4978 393.026 22.0684 388.192 19.4522C383.358 16.8361 377.682 16.2473 372.413 17.8156L204.153 67.9211Z"
        fill="#FF97C9"
      />
      <g style={{ mixBlendMode: "multiply", opacity: "0.19" }}>
        <path
          d="M209.623 124.705C209.623 124.705 193.487 133.239 199.37 153.037C205.252 172.835 219.011 175.41 228.061 177.026C211.786 191.197 163.691 171.69 163.691 171.69L181.862 122.811L209.623 124.705Z"
          fill="#FF97C9"
        />
      </g>
      <g style={{ mixBlendMode: "multiply", opacity: "0.19" }}>
        <path
          d="M425.257 122.561C425.257 122.561 399.571 41.0144 378.454 33.1498C360.655 26.5292 335.178 24.0937 311.607 31.1096C344.583 9.28289 399.379 0 399.379 0L425.257 122.561Z"
          fill="#FF97C9"
        />
      </g>
      <path
        d="M89.1154 193.447C94.6114 193.447 99.0668 188.991 99.0668 183.495C99.0668 177.999 94.6114 173.544 89.1154 173.544C83.6194 173.544 79.1641 177.999 79.1641 183.495C79.1641 188.991 83.6194 193.447 89.1154 193.447Z"
        fill="#1C3177"
      />
      <path
        d="M162.93 171.487C168.426 171.487 172.881 167.031 172.881 161.535C172.881 156.039 168.426 151.584 162.93 151.584C157.434 151.584 152.979 156.039 152.979 161.535C152.979 167.031 157.434 171.487 162.93 171.487Z"
        fill="#1C3177"
      />
      <path
        d="M120.578 195.801C120.578 195.801 120.857 188.053 129.995 185.338C139.132 182.624 143.323 189.041 143.323 189.041"
        stroke="#1C3177"
        strokeWidth="9"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M151.026 366.596C156.522 366.596 160.977 362.141 160.977 356.645C160.977 351.149 156.522 346.693 151.026 346.693C145.53 346.693 141.074 351.149 141.074 356.645C141.074 362.141 145.53 366.596 151.026 366.596Z"
        fill="#1C3177"
      />
      <path
        d="M224.842 344.629C230.338 344.629 234.793 340.174 234.793 334.678C234.793 329.182 230.338 324.727 224.842 324.727C219.346 324.727 214.891 329.182 214.891 334.678C214.891 340.174 219.346 344.629 224.842 344.629Z"
        fill="#1C3177"
      />
      <path
        d="M289.728 123.799C291.292 129.065 287.403 131.606 282.131 133.175C276.859 134.744 272.215 134.744 270.645 129.478C270.242 128.216 270.094 126.887 270.211 125.567C270.327 124.248 270.706 122.965 271.325 121.794C271.943 120.622 272.79 119.586 273.814 118.746C274.838 117.906 276.019 117.279 277.289 116.901C278.559 116.523 279.891 116.402 281.208 116.546C282.524 116.689 283.799 117.094 284.958 117.737C286.116 118.379 287.135 119.246 287.954 120.287C288.773 121.328 289.376 122.522 289.728 123.799V123.799Z"
        fill="#1C3177"
      />
      <path
        d="M363.539 101.832C365.108 107.104 361.214 109.639 355.942 111.208C350.67 112.778 346.025 112.778 344.456 107.511C344.052 106.25 343.904 104.92 344.021 103.601C344.138 102.281 344.517 100.998 345.135 99.8269C345.754 98.6557 346.6 97.6196 347.624 96.7795C348.648 95.9393 349.83 95.312 351.1 94.9341C352.369 94.5563 353.701 94.4356 355.018 94.5791C356.335 94.7226 357.61 95.1274 358.768 95.7698C359.927 96.4122 360.946 97.2793 361.765 98.3203C362.584 99.3613 363.187 100.555 363.539 101.832V101.832Z"
        fill="#1C3177"
      />
      <path
        d="M339.311 131.762C338.945 136.779 332.854 136.244 324.024 138.871C315.195 141.499 310.975 145.846 307.336 141.278C302.686 135.465 310.666 126.281 319.496 123.654C328.325 121.026 339.852 124.368 339.311 131.762Z"
        fill="#F774B9"
      />
      <path
        d="M209.818 354.954L174.134 365.572C170.743 366.581 168.812 370.147 169.821 373.538C170.83 376.929 174.397 378.86 177.787 377.851L213.472 367.233C216.862 366.224 218.793 362.658 217.784 359.267C216.775 355.876 213.209 353.945 209.818 354.954Z"
        fill="white"
      />
      <path
        d="M370.234 328.772L380.157 346.734"
        stroke="#1C3177"
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M391.316 267.17L409.911 258.491"
        stroke="#1C3177"
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M390.16 300.4L414.138 308.282"
        stroke="#1C3177"
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

// import Link from 'next/link'

// export default function NotFound() {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home</Link>
//     </div>
//   )
// }
