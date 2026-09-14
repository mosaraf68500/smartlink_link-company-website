import Image from "next/image";

export interface WorkItem {
  title: string;
  category: string;
  image: string;
}

interface WorkCardProps {
  work: WorkItem;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "410.6666564941406 / 300" }}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="h6-medium font-bricolage text-dark">{work.title}</p>
        <span
          className="body-small-medium flex-shrink-0 whitespace-nowrap"
          style={{
            borderRadius: 40,
            border: "1px solid #106655",
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 12,
            paddingRight: 12,
            color: "#106655",
          }}
        >
          {work.category}
        </span>
      </div>
    </div>
  );
}
