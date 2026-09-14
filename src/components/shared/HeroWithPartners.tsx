import { ReactNode } from "react";
import ContentHero from "@/src/components/shared/ContentHero";
import PartnerLogos, { PartnerLogo } from "@/src/components/ui/PartnerLogos";
import PrimaryButton from "../ui/PrimaryButton";
import { ArrowRight } from "../icons/ArrowRight";
import Link from "next/link";

interface HeroWithPartnersProps {
  breadcrumb: string;
  title: string;
  description: string;
  startingPrice?: string;
  buttonText: string;
  buttonHref?: string;
  buttonIcon?: ReactNode;
  showPartners?: boolean;
  partnersTitle?: string;
  logos?: PartnerLogo[];
}

export default function HeroWithPartners({
  breadcrumb,
  title,
  description,
  startingPrice,
  buttonText,
  buttonHref = "#",
  buttonIcon = <ArrowRight />,
  showPartners = true,
  partnersTitle,
  logos = [],
}: HeroWithPartnersProps) {
  return (
    <ContentHero
      breadcrumb={breadcrumb}
      title={title}
      description={description}
      startingPrice={startingPrice}
    >
      <div className="pt-4">
  <Link href="/contact">        <PrimaryButton>
          <span className="flex items-center gap-2">
            {buttonText}
            {buttonIcon}
          </span>
        </PrimaryButton> </Link>

      </div>

      {showPartners && logos.length > 0 && (
        <PartnerLogos title={partnersTitle} logos={logos} />
      )}
    </ContentHero>
  );
}