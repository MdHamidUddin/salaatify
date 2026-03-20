"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { teamMembersData, type TeamMember } from "@/lib/team-data";

const TeamPage = () => {
  const { t, i18n } = useTranslation();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const isBangla = i18n.language === "bn";

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setTeamMembers(teamMembersData);
      } catch (err) {
        console.error("Failed to fetch team members:", err);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const getLocalizedName = (member: TeamMember) => {
    return isBangla && member.nameBn ? member.nameBn : member.name;
  };

  const getLocalizedRole = (member: TeamMember) => {
    return isBangla && member.roleBn ? member.roleBn : member.role;
  };

  const getLocalizedDescription = (member: TeamMember) => {
    return isBangla && member.descriptionBn
      ? member.descriptionBn
      : member.description;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-gray-700">
        <p>Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-['Inter']">
      {/* Header Section */}
      <section>
        <h2
          className="my-6 rounded-md bg-blue-100 px-4 py-2 text-center text-3xl font-bold text-blue-800 shadow-md"
          dir={isBangla ? "rtl" : "ltr"}
        >
          {t("Our Team")}
        </h2>
        <div className="mb-10 space-y-4 rounded-lg bg-white p-6 leading-relaxed text-gray-700 shadow-lg">
          <p dir={isBangla ? "rtl" : "ltr"}>
            <Trans
              i18nKey="teamPage.description"
              components={{ 1: <span className="font-bold" /> }}
            />
          </p>
        </div>
      </section>

      {/* Team Cards Section - Alternating Left/Right */}
      <section className="mt-12 space-y-12">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            {/* Image Container */}
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-blue-100 shadow-md md:h-64 md:w-64">
                <Image
                  src={member.image}
                  alt={getLocalizedName(member)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/team/placeholder.jpg";
                  }}
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div>
                <h3
                  className="text-2xl font-bold text-gray-800"
                  dir={isBangla ? "rtl" : "ltr"}
                >
                  {getLocalizedName(member)}
                </h3>
                <p
                  className="mt-1 text-lg font-semibold text-blue-600"
                  dir={isBangla ? "rtl" : "ltr"}
                >
                  {getLocalizedRole(member)}
                </p>
              </div>
              {getLocalizedDescription(member) && (
                <p
                  className="leading-relaxed text-gray-600"
                  dir={isBangla ? "rtl" : "ltr"}
                >
                  {getLocalizedDescription(member)}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamPage;
