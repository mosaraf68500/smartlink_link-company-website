"use client";

import Image from "next/image";

export interface HeroImageItem {
  src: string;
  alt?: string;
}

interface HeroImageStripProps {
  images: HeroImageItem[];
  className?: string;
}

// odd position (1st, 3rd, 5th...) = base line e, even (2nd, 4th...) = nis theke padding diye upore
function getSizeForPosition(position: number) {
  const isOdd = position % 2 !== 0;
  return isOdd
    ? { width: 400, height: 250, liftPadding: 0 }
    : { width: 200, height: 250, liftPadding: 60 };
}

export default function HeroImageStrip({
  images,
  className = "",
}: HeroImageStripProps) {
  const loopImages = [...images, ...images];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max items-end">
        {loopImages.map((img, i) => {
          const position = (i % images.length) + 1;
          const { width, height, liftPadding } = getSizeForPosition(position);

          return (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ paddingBottom: liftPadding }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width,
                  height,
                //   boxShadow: "0px 0px 40px 0px #F746080F",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? `Work sample ${position}`}
                  fill
                  className="object-cover"
                  sizes={`${width}px`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
