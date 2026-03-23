"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { teachersData, type Teacher } from "@/lib/teachers-data";

const TeachersPage = () => {
  const { i18n } = useTranslation();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const isBangla = i18n.language === "bn";

  useEffect(() => {
    const fetchTeachers = () => {
      try {
        setLoading(true);
        void new Promise((resolve) => setTimeout(resolve, 500));
        setTeachers(teachersData);
      } catch (err) {
        console.error("Failed to fetch teachers:", err);
        setError("Failed to load teachers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    void fetchTeachers();
  }, []);

  const getLocalizedName = (teacher: Teacher) => {
    return isBangla && teacher.nameBn ? teacher.nameBn : teacher.name;
  };

  const getLocalizedDegree = (teacher: Teacher) => {
    return isBangla && teacher.degreeBn ? teacher.degreeBn : teacher.degree;
  };

  const getLocalizedPosition = (teacher: Teacher) => {
    return isBangla && teacher.positionBn
      ? teacher.positionBn
      : teacher.position;
  };

  const getLocalizedBio = (teacher: Teacher) => {
    return isBangla && teacher.bioBn ? teacher.bioBn : teacher.bio;
  };

  const getLocalizedSpecialization = (teacher: Teacher) => {
    return isBangla && teacher.specializationBn
      ? teacher.specializationBn
      : teacher.specialization;
  };

  const getLocalizedExperience = (teacher: Teacher) => {
    return isBangla && teacher.experienceBn
      ? teacher.experienceBn
      : teacher.experience;
  };

  const getLocalizedSubjects = (teacher: Teacher) => {
    return isBangla && teacher.subjectsBn
      ? teacher.subjectsBn
      : teacher.subjects;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-gray-700">
        <p>
          {isBangla ? "শিক্ষকদের তথ্য লোড হচ্ছে..." : "Loading teachers..."}
        </p>
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
          dir={isBangla ? "ltr" : "ltr"}
        >
          {isBangla ? "আমাদের শিক্ষকবৃন্দ" : "Our Teachers"}
        </h2>
        <div className="mb-10 rounded-lg bg-white p-6 leading-relaxed text-gray-700 shadow-lg">
          <p className="text-center text-lg" dir={isBangla ? "ltr" : "ltr"}>
            {isBangla
              ? "আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী আপনার ইসলামিক শিক্ষার যাত্রায় সঙ্গী হতে প্রস্তুত।"
              : "Our experienced and dedicated faculty members are ready to guide you on your Islamic learning journey."}
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              onClick={() => setSelectedTeacher(teacher)}
            >
              {/* Teacher Image */}
              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src={teacher.image}
                  alt={getLocalizedName(teacher)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/teachers/placeholder.jpg";
                  }}
                />
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3
                  className="mb-1 text-xl font-bold text-gray-800"
                  dir={isBangla ? "ltr" : "ltr"}
                >
                  {getLocalizedName(teacher)}
                </h3>
                <p
                  className="mb-2 text-sm font-semibold text-blue-600"
                  dir={isBangla ? "ltr" : "ltr"}
                >
                  {getLocalizedPosition(teacher)}
                </p>
                <p
                  className="line-clamp-2 text-sm text-gray-600"
                  dir={isBangla ? "ltr" : "ltr"}
                >
                  {getLocalizedDegree(teacher)}
                </p>

                {/* View Details Button */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <button className="font-semibold text-blue-600 group-hover:text-blue-700">
                    {isBangla ? "বিস্তারিত দেখুন →" : "View Details →"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Details Modal */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Teacher Image */}
                <div className="relative h-64 w-full flex-shrink-0 md:h-auto md:w-64">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={selectedTeacher.image}
                      alt={getLocalizedName(selectedTeacher)}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Teacher Details */}
                <div className="flex-1">
                  <h2
                    className="mb-2 text-2xl font-bold text-gray-800"
                    dir={isBangla ? "ltr" : "ltr"}
                  >
                    {getLocalizedName(selectedTeacher)}
                  </h2>
                  <p
                    className="mb-1 text-lg font-semibold text-blue-600"
                    dir={isBangla ? "ltr" : "ltr"}
                  >
                    {getLocalizedPosition(selectedTeacher)}
                  </p>
                  <p
                    className="mb-4 text-sm text-gray-600"
                    dir={isBangla ? "ltr" : "ltr"}
                  >
                    {getLocalizedDegree(selectedTeacher)}
                  </p>

                  {/* Bio */}
                  {getLocalizedBio(selectedTeacher) && (
                    <div className="mb-4">
                      <h3 className="mb-2 text-lg font-semibold text-gray-800">
                        {isBangla ? "জীবনী" : "Biography"}
                      </h3>
                      <p
                        className="leading-relaxed text-gray-600"
                        dir={isBangla ? "ltr" : "ltr"}
                      >
                        {getLocalizedBio(selectedTeacher)}
                      </p>
                    </div>
                  )}

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                    {getLocalizedSpecialization(selectedTeacher) && (
                      <div>
                        <p className="text-xs text-gray-500">
                          {isBangla ? "বিশেষজ্ঞতা" : "Specialization"}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                          {getLocalizedSpecialization(selectedTeacher)}
                        </p>
                      </div>
                    )}
                    {getLocalizedExperience(selectedTeacher) && (
                      <div>
                        <p className="text-xs text-gray-500">
                          {isBangla ? "অভিজ্ঞতা" : "Experience"}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                          {getLocalizedExperience(selectedTeacher)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Subjects */}
                  {getLocalizedSubjects(selectedTeacher) &&
                    getLocalizedSubjects(selectedTeacher)!.length > 0 && (
                      <div className="mt-4">
                        <h3 className="mb-2 text-sm font-semibold text-gray-800">
                          {isBangla ? "পাঠদান বিষয়সমূহ" : "Subjects Taught"}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {getLocalizedSubjects(selectedTeacher)!.map(
                            (subject, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700"
                              >
                                {subject}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersPage;
