import Image from "next/image";

interface PinIconProps {
  size?: number;
  className?: string;
  src?: string;
}

export default function PinIcon({
  size = 40,
  className,
  src = "/icons/pin.png",
}: PinIconProps) {
  return (
    <Image
      src={src}
      alt="pin"
      width={size}
      height={size}
      className={className}
    />
  );
}
