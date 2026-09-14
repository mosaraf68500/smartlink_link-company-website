import Image from "next/image";

export interface PartnerLogo {
  src: string;
  alt: string;
}

interface PartnerLogosProps {
  title?: string;
  logos: PartnerLogo[];
}

export default function PartnerLogos({
  title = "Our Advertising Partners",
  logos,
}: PartnerLogosProps) {
  return (
    <div className="flex flex-col pt-6 items-center gap-6">
      <p className="h6-regular font-bricolage text-dark">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {logos.map((logo) => (
          <div key={logo.alt} className="relative h-12 w-12 flex-shrink-0 sm:h-14 sm:w-14">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}