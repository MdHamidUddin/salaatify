"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { coursesData, type Course } from "@/lib/courses-data";

const CourseDetailsPage = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  const isBangla = i18n.language === "bn";

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 300));
        const foundCourse = coursesData.find(
          (c) => c.id === parseInt(params.id as string),
        );
        setCourse(foundCourse || null);
      } catch (err) {
        console.error("Failed to fetch course:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCourse();
    }
  }, [params.id]);

  const getLocalizedTitle = () => {
    return isBangla && course?.titleBn ? course.titleBn : course?.title;
  };

  const getLocalizedDescription = () => {
    return isBangla && course?.descriptionBn
      ? course.descriptionBn
      : course?.description;
  };

  const getLocalizedDuration = () => {
    return isBangla && course?.durationBn
      ? course.durationBn
      : course?.duration;
  };

  const getLocalizedLevel = () => {
    return isBangla && course?.levelBn ? course.levelBn : course?.level;
  };

  const getLocalizedPrice = () => {
    return isBangla && course?.priceBn ? course.priceBn : course?.price;
  };

  const getLocalizedInstructor = () => {
    return isBangla && course?.instructorBn
      ? course.instructorBn
      : course?.instructor;
  };

  const getLocalizedCurriculum = () => {
    return isBangla && course?.curriculumBn
      ? course.curriculumBn
      : course?.curriculum;
  };

  const getLocalizedRequirements = () => {
    return isBangla && course?.requirementsBn
      ? course.requirementsBn
      : course?.requirements;
  };

  const getLocalizedLearningOutcomes = () => {
    return isBangla && course?.learningOutcomesBn
      ? course.learningOutcomesBn
      : course?.learningOutcomes;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-gray-700">
        <p>Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 font-['Inter']">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm">
        <Link href="/courses" className="text-blue-600 hover:text-blue-800">
          {isBangla ? "কোর্সসমূহ" : "Courses"}
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{getLocalizedTitle()}</span>
      </nav>

      {/* Course Header */}
      <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="relative h-80 w-full">
          <img
            src={course.image}
            alt={getLocalizedTitle() || ""}
            // fill
            className="object-cover"
            // priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1
              className="mb-2 text-4xl font-bold"
              dir={isBangla ? "rtl" : "ltr"}
            >
              {getLocalizedTitle()}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <span>{getLocalizedInstructor()}</span>
              <span>
                ★ {course.rating} ({course.enrolled.toLocaleString()}{" "}
                {isBangla ? "শিক্ষার্থী" : "students"})
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {isBangla ? "কোর্স বিবরণ" : "Course Description"}
            </h2>
            <p
              className="leading-relaxed text-gray-700"
              dir={isBangla ? "rtl" : "ltr"}
            >
              {getLocalizedDescription()}
            </p>
          </div>

          {/* Curriculum */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {isBangla ? "পাঠ্যসূচি" : "Curriculum"}
            </h2>
            <ul className="space-y-2" dir={isBangla ? "rtl" : "ltr"}>
              {getLocalizedCurriculum()?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-blue-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {isBangla ? "শেখার ফলাফল" : "Learning Outcomes"}
            </h2>
            <ul className="space-y-2" dir={isBangla ? "rtl" : "ltr"}>
              {getLocalizedLearningOutcomes()?.map((outcome, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-green-600">★</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Course Info Card */}
          <div className="sticky top-8 rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-gray-800">
              {isBangla ? "কোর্স তথ্য" : "Course Information"}
            </h3>

            <div className="space-y-4">
              {/* <div>
                <p className="text-sm text-gray-500">
                  {isBangla ? "মেয়াদ" : "Duration"}
                </p>
                <p className="font-semibold text-gray-800">
                  {getLocalizedDuration()}
                </p>
              </div> */}

              <div>
                <p className="text-sm text-gray-500">
                  {isBangla ? "স্তর" : "Level"}
                </p>
                <p className="font-semibold text-gray-800">
                  {getLocalizedLevel()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {isBangla ? "মূল্য" : "Price"}
                </p>
                <p className="text-xl font-bold text-green-600">
                  {getLocalizedPrice()}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {isBangla ? "শিক্ষক" : "Instructor"}
                </p>
                <p className="font-semibold text-gray-800">
                  {getLocalizedInstructor()}
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h4 className="mb-2 font-semibold text-gray-800">
                {isBangla ? "প্রয়োজনীয়তা" : "Requirements"}
              </h4>
              <ul
                className="space-y-1 text-sm text-gray-600"
                dir={isBangla ? "rtl" : "ltr"}
              >
                {getLocalizedRequirements()?.map((req, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <span>•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enrollment Button */}
            <button className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
              {isBangla ? "এখনই নিবন্ধন করুন" : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
