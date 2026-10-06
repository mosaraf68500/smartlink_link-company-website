import Image from "next/image";
import { MapPin, Mail, Phone, Headphones } from "lucide-react";
import type { Office } from "./officesData";

interface OfficeCardProps {
  office: Office;
  size: "lg" | "sm";
}

export default function OfficeCard({ office, size }: OfficeCardProps) {
  const isLarge = size === "lg";
  const hasContactNumbers =
    (office.phones && office.phones.length > 0) ||
    (office.hotlines && office.hotlines.length > 0) ||
    Boolean(office.landline);

  return (
    <div
      className="flex flex-col gap-5 rounded-xl border p-5 sm:gap-6"
      style={{
        backgroundColor: "#09382F",
        borderColor: "#0B483C",
      }}
    >
      {/* Top: image left, location + mail right */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch lg:gap-8">
        <div
          className={`relative w-full flex-shrink-0 overflow-hidden rounded-lg ${
            isLarge
              ? "h-[220px] sm:h-[260px] sm:w-1/2 lg:h-[320px] xl:w-[620px]"
              : "h-[200px] sm:h-[240px] sm:w-2/5 lg:w-[220px]"
          }`}
        >
          <Image
            src={office.image}
            alt={`${office.label} — ${office.country}`}
            fill
            className="object-cover"
            sizes={
              isLarge
                ? "(max-width: 1024px) 100vw, 620px"
                : "(max-width: 1024px) 100vw, 220px"
            }
          />
        </div>

        <div className="flex w-full min-w-0 flex-col justify-start gap-4 sm:gap-6">
          <OfficeHeader office={office} />
          <div className="flex flex-col gap-4">
            <InfoRow icon={<MapPin size={24} />}>{office.address}</InfoRow>
            {office.emails.length > 0 ? (
              <InfoRow icon={<Mail size={24} />}>
                {office.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block hover:underline [overflow-wrap:anywhere]"
                  >
                    {email}
                  </a>
                ))}
              </InfoRow>
            ) : null}
          </div>
        </div>
      </div>

      {/* Bottom: mobile, hotline, phone in one row */}
      {hasContactNumbers ? (
        <div className="grid grid-cols-1 gap-4 border-t border-[#0B483C] pt-5 sm:grid-cols-3 sm:gap-6">
          {office.phones && office.phones.length > 0 ? (
            <InfoRow icon={<Phone size={24} />} label="Mobile">
              {office.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="block hover:underline"
                >
                  {phone}
                </a>
              ))}
            </InfoRow>
          ) : null}
          {office.hotlines && office.hotlines.length > 0 ? (
            <InfoRow icon={<Headphones size={24} />} label="Hotline">
              {office.hotlines.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="block hover:underline"
                >
                  {phone}
                </a>
              ))}
            </InfoRow>
          ) : null}
          {office.landline ? (
            <InfoRow icon={<Phone size={24} />} label="Phone">
              <a
                href={`tel:${office.landline.replace(/[^\d+]/g, "")}`}
                className="block hover:underline"
              >
                {office.landline}
              </a>
            </InfoRow>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function OfficeHeader({ office }: { office: Office }) {
  return (
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
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label?: string;
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
      <div className="min-w-0">
        {label ? (
          <p
            className="title-regular mb-0.5"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {label}
          </p>
        ) : null}
        <span
          className="title-regular"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
