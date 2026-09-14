"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image?: string; // omit for placeholder box
}

const team: TeamMember[] = [
  {
    name: "Md Milon Hossin",
    role: "Founder and CEO",
    image: "/images/TeamPhoto/Boss 2.png",
  },
  
  {
    name: "Md Shobuj Hossain",
    role: "AGM",
    image: "/images/TeamPhoto/Sobuj 2.png",
  },
      {
          "name": "MD Moniruzzaman",
          "role": "Senior Software Engineer",
          "image": "/images/TeamPhoto/Monir 2.png"
        },
        {
          "name": "Shaharior Islam",
          "role": "Visualizer",
          "image": "/images/TeamPhoto/Shaharior 2.png"
        },
        {
          "name": "MD Mizanur",
          "role": "Assistant Manager",
          "image": "/images/TeamPhoto/Mizan-Bhai 2.png"
        },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function OurTeam() {
  return (
    <section className="py-20 px-4 md:px-0">
      <SectionHeader
        title="The People Behind Our Vision"
        description="Meet the leaders who guide our strategy, inspire our teams, and turn ambitious ideas into meaningful digital experiences."
        titleClassName="max-w-[500px]"
      >
        <Link href='/contact'>      <PrimaryButton>Meet the team</PrimaryButton></Link>
  
      </SectionHeader>

      <div className="container mt-16 px-4 md:px-0 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
        {team.map((member, index) => {
          const isNameFirst = index % 2 === 1;

          return (
            <motion.div
              key={member.name}
              className={`group flex flex-col gap-4 ${isNameFirst ? "sm:mt-10" : ""}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {isNameFirst && (
                <div className="sm:-mt-12">
                  <p className="h6-medium font-bricolage text-secondary font-jakarta">{member.name}</p>
                  <p className="body-regular text-gray font-jakarta">{member.role}</p>
                </div>
              )}

              <div className="relative aspect-[191/220] w-full overflow-hidden bg-gray-200">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 20vw, 45vw"
                  />
                ) : null}
              </div>

              {!isNameFirst && (
                <div>
                  <p className="h6-medium text-dark">{member.name}</p>
                  <p className="body-regular text-gray">{member.role}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
