interface ArrowUpRightIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function ArrowUpRightIcon({
  className,
  size = 40,
  color = "var(--color-primary)",
}: ArrowUpRightIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M31.2132 26.3651V9.39453H14.2426M31.2132 9.39453L20.6066 20.0011M10 30.6077L14.2426 26.3651"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
