interface DesignfixterIconProps {
  size?: number;
  className?: string;
}

export default function DesignfixterIcon({
  size = 36,
  className,
}: DesignfixterIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_527_105406)">
        <path
          d="M22.0638 15.1426C22.5847 16.1715 22.4173 17.4617 21.5558 18.3229C20.4852 19.3935 18.7496 19.3935 17.679 18.3229C16.6083 17.2497 16.6083 15.5141 17.679 14.4435C18.5401 13.5824 19.8282 13.4146 20.8567 13.9384L26.8118 9.1875L22.0634 15.1426H22.0638Z"
          fill="white"
        />
        <path
          d="M36 0V36H0L26.8121 19.9199V9.18792H16.0826L0 36V0H36Z"
          fill="#7736FF"
        />
        <path
          d="M22.0638 15.1426C22.5847 16.1715 22.4173 17.4617 21.5558 18.3229C20.4852 19.3935 18.7496 19.3935 17.679 18.3229C16.6083 17.2497 16.6083 15.5141 17.679 14.4435C18.5401 13.5824 19.8282 13.4146 20.8567 13.9384L26.8118 9.1875L22.0634 15.1426H22.0638Z"
          fill="#7736FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_527_105406">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
