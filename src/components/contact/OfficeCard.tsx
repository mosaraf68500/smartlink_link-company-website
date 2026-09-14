import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { Office } from "./GlobalOffices";

interface OfficeCardProps {
  office: Office;
  size: "lg" | "sm";
}

export default function OfficeCard({ office, size }: OfficeCardProps) {
  const isLarge = size === "lg";

  return (
    <div
      className={`flex flex-col rounded-xl border p-5 sm:flex-row sm:items-stretch ${
        isLarge ? "gap-6 lg:h-[360px] lg:gap-8" : "gap-5 lg:h-[360px]"
      }`}
      style={{
        backgroundColor: "#09382F",
        borderColor: "#0B483C",
      }}
    >
      {/* Image */}
      <div
        className={`relative w-full flex-shrink-0 overflow-hidden rounded-lg ${
          isLarge
            ? "h-[220px] sm:h-[260px] lg:h-[320px] lg:w-[620px]"
            : "h-[200px] sm:h-full lg:h-[320px] lg:w-[220px]"
        }`}
      >
        <Image
          src={office.image}
          alt={`${office.country} office`}
          fill
          className="object-cover"
          sizes={
            isLarge
              ? "(max-width: 1024px) 100vw, 620px"
              : "(max-width: 1024px) 100vw, 220px"
          }
        />
      </div>

      {/* Details */}
      <div className="flex w-full flex-col justify-start gap-4 sm:gap-10 lg:h-[320px]">
        <div className="flex items-center gap-2.5">
          <span className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
            <Image
              src={office.flag}
              alt={`${office.country} flag`}
              fill
              className="object-cover"
            />
          </span>
          <div>
            <p className="h6-medium text-white">{office.country}</p>
            <p
              className="title-regular"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {office.label}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <InfoRow icon={<MapPin size={24} />}>{office.address}</InfoRow>
          <InfoRow icon={<Mail size={24} />}>
            {office.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="block hover:underline">
                {email}
              </a>
            ))}
          </InfoRow>
          <InfoRow icon={<Phone size={24} />}>
            {office.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className="block hover:underline">
                {phone}
              </a>
            ))}
          </InfoRow>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="mt-0.5 flex-shrink-0 title-regular"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {icon}
      </span>
      <span
        className="title-regular"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        {children}
      </span>
    </div>
  );
}
