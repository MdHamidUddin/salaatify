"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { coursesData, type Course } from "@/lib/courses-data";

const CoursesPage = () => {
  const { t, i18n } = useTranslation();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const isBangla = i18n.language === "bn";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setCourses(coursesData);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const getLocalizedTitle = (course: Course) => {
    return isBangla && course.titleBn ? course.titleBn : course.title;
  };

  const getLocalizedDescription = (course: Course) => {
    return isBangla && course.descriptionBn
      ? course.descriptionBn
      : course.description;
  };

  const getLocalizedDuration = (course: Course) => {
    return isBangla && course.durationBn ? course.durationBn : course.duration;
  };

  const getLocalizedLevel = (course: Course) => {
    return isBangla && course.levelBn ? course.levelBn : course.level;
  };

  const getLocalizedPrice = (course: Course) => {
    return isBangla && course.priceBn ? course.priceBn : course.price;
  };

  const getLocalizedInstructor = (course: Course) => {
    return isBangla && course.instructorBn
      ? course.instructorBn
      : course.instructor;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-gray-700">
        <p>Loading courses...</p>
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
          {t("Our Courses")}
        </h2>
        <div className="mb-10 rounded-lg bg-white p-6 leading-relaxed text-gray-700 shadow-lg">
          <p className="text-center text-lg" dir={isBangla ? "rtl" : "ltr"}>
            {isBangla
              ? "আমাদের বিভিন্ন কোর্সের মাধ্যমে ইসলামিক জ্ঞান অর্জন করুন। সব বয়সের এবং স্তরের জন্য উপযুক্ত।"
              : "Gain Islamic knowledge through our diverse courses. Suitable for all ages and levels."}
          </p>
        </div>
      </section>

      {/* Courses Grid - 2 cards per row on large screens */}
      <section className="mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {courses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <div className="group h-full cursor-pointer rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                {/* Course Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={course.image}
                    alt={getLocalizedTitle(course)}
                    // fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                    {course.rating} ★
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3
                    className="mb-2 line-clamp-2 text-2xl font-bold text-gray-800"
                    dir={isBangla ? "rtl" : "ltr"}
                  >
                    {getLocalizedTitle(course)}
                  </h3>

                  <p
                    className="mb-4 line-clamp-3 text-gray-600"
                    dir={isBangla ? "rtl" : "ltr"}
                  >
                    {getLocalizedDescription(course)}
                  </p>

                  {/* Course Details Grid */}
                  <div className="mb-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
                    {/* <div>
                      <p className="text-xs text-gray-500">
                        {isBangla ? "মেয়াদ" : "Duration"}
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {getLocalizedDuration(course)}
                      </p>
                    </div> */}
                    <div>
                      <p className="text-xs text-gray-500">
                        {isBangla ? "স্তর" : "Level"}
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {getLocalizedLevel(course)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        {isBangla ? "মূল্য" : "Price"}
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        {getLocalizedPrice(course)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        {isBangla ? "শিক্ষক" : "Instructor"}
                      </p>
                      <p className="line-clamp-1 text-sm font-semibold text-gray-700">
                        {getLocalizedInstructor(course)}
                      </p>
                    </div>
                  </div>

                  {/* Enrollment Info */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {course.enrolled.toLocaleString()}{" "}
                        {isBangla ? "শিক্ষার্থী" : "students"}
                      </span>
                    </div>
                    <span className="font-semibold text-blue-600 group-hover:text-blue-700">
                      {isBangla ? "বিস্তারিত দেখুন →" : "View Details →"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
