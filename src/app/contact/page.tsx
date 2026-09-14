import GlobalOffices from "@/src/components/contact/GlobalOffices";
import BoltIcon from "@/src/components/icons/Bolticon";
import TalkToExperts from "@/src/components/shared/TalkToExperts";
import React from "react";

export default function ContactPage() {
  return (
    <div className="mt-20 md:mt-10">
      <TalkToExperts
        showBadge={true}
        badgeLabel="Contact Us"
        badgeIcon={<BoltIcon />}
        title="Talk to the experts who know your business best."
        titleClassName="font-bricolage text-dark h2"
      />

      <div id="global-offices" className="">
        <GlobalOffices />
      </div>
    </div>
  );
}
