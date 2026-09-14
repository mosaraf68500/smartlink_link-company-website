interface SyncBariIconProps {
  className?: string;
  size?: number;
}

export default function SyncBariIcon({
  className,
  size = 40,
}: SyncBariIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_i_459_100975)">
        <rect width="40" height="40" rx="20" fill="var(--color-primary)" />
        <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.1" />
        <path
          d="M25.5078 16.5664H33.4619C33.9517 16.5664 34.2429 17.1137 33.9688 17.5195L25.3545 30.2549C25.2408 30.4228 25.0514 30.5234 24.8486 30.5234H13.1182C12.6283 30.5233 12.3378 29.9761 12.6123 29.5703L15.0273 25.999C15.141 25.831 15.3313 25.7305 15.5342 25.7305H17.2441C18.3323 25.7305 19.3503 25.1904 19.96 24.2891L25.001 16.835C25.1146 16.6669 25.305 16.5664 25.5078 16.5664Z"
          fill="url(#paint0_linear_459_100975)"
          fillOpacity="0.68"
          stroke="url(#paint1_linear_459_100975)"
        />
        <g filter="url(#filter1_d_459_100975)">
          <path
            d="M13.923 9.86589C14.3365 9.25593 15.0254 8.89062 15.7624 8.89062H26.2804C27.1717 8.89062 27.7002 9.88742 27.2001 10.6252L18.8973 22.8726C18.4838 23.4826 17.7949 23.8479 17.0579 23.8479H6.53994C5.6486 23.8479 5.12008 22.8511 5.62024 22.1133L13.923 9.86589Z"
            fill="url(#paint2_linear_459_100975)"
            shapeRendering="crispEdges"
          />
          <path
            d="M15.7627 9.39062H26.2803C26.7705 9.39062 27.0612 9.93894 26.7861 10.3447L18.4834 22.5918C18.1629 23.0645 17.6287 23.3477 17.0576 23.3477H6.54004C6.0498 23.3477 5.75909 22.7993 6.03418 22.3936L14.3369 10.1465C14.6574 9.67378 15.1916 9.39062 15.7627 9.39062Z"
            stroke="url(#paint3_linear_459_100975)"
            shapeRendering="crispEdges"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_459_100975"
          x="0"
          y="-4"
          width="40"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_459_100975"
          />
        </filter>
        <filter
          id="filter1_d_459_100975"
          x="5.42676"
          y="8.89062"
          width="26.4112"
          height="22.7348"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.22222" dy="5.55556" />
          <feGaussianBlur stdDeviation="1.11111" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.90441 0 0 0 0 0.270038 0 0 0 0 0.0478294 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_459_100975"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_459_100975"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_459_100975"
          x1="23.2903"
          y1="16.0664"
          x2="23.2903"
          y2="38.7469"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.313079" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_459_100975"
          x1="66.5879"
          y1="-20.2367"
          x2="23.3863"
          y2="37.2405"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_459_100975"
          x1="16.4101"
          y1="8.89062"
          x2="16.4101"
          y2="28.6693"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.38239" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_459_100975"
          x1="58.6517"
          y1="-27.4124"
          x2="15.1648"
          y2="29.0331"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
