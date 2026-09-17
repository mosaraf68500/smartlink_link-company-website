import Image from "next/image";

export interface ImageGalleryProps {
  images: string[];
  /** Used to build per-image alt text, e.g. product name. */
  alt: string;
  className?: string;
}

export default function ImageGallery({ images, alt, className = "" }: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className={`grid w-full grid-cols-3 gap-3 sm:gap-4 ${className}`}>
      {images.map((src, index) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-2xl bg-[#F7F7F5]"
        >
          <Image
            src={src}
            alt={`${alt} — photo ${index + 1}`}
            fill
            sizes="(max-width: 768px) 33vw, 340px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
