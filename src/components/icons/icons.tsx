export function FredAiLogo({
  size = 35,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size - 1}
      height={size}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.662 13.1976C25.662 13.2876 25.599 13.3632 25.5115 13.374C15.638 14.8824 14.469 16.0884 13.0025 26.2404C12.9885 26.3268 12.915 26.3952 12.831 26.3952C12.747 26.3952 12.67 26.3304 12.6595 26.2404C11.193 16.0848 10.0205 14.8824 0.1505 13.374C0.0664998 13.3596 0 13.284 0 13.1976C0 13.1112 0.0629998 13.032 0.1505 13.0212C10.024 11.5128 11.193 10.3068 12.6595 0.1548C12.6735 0.0684001 12.747 0 12.831 0C12.915 0 12.992 0.0648001 13.0025 0.1548C14.469 10.3104 15.6415 11.5128 25.5115 13.0212C25.5955 13.0356 25.662 13.1112 25.662 13.1976Z"
        fill="black"
        className={className}
      />
    </svg>
  );
}

export function WishListMail({
  size = 26,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size + 6}
      height={size}
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.666 24.3337H8.33268C4.33268 24.3337 1.66602 22.3337 1.66602 17.667V8.33366C1.66602 3.66699 4.33268 1.66699 8.33268 1.66699H21.666C25.666 1.66699 28.3327 3.66699 28.3327 8.33366V17.667C28.3327 22.3337 25.666 24.3337 21.666 24.3337Z"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6673 9L17.494 12.3333C16.1207 13.4267 13.8673 13.4267 12.494 12.3333L8.33398 9"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


