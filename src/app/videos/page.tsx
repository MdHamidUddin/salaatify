"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { videosData, type Video } from "@/lib/videos-data";
import { VideoCard } from "@/components/video/video-card";
import { ChevronDown, ChevronUp } from "lucide-react";

const VideosPage = () => {
  const { i18n } = useTranslation();
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isBangla = i18n.language === "bn";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setVideos(videosData);
        setFilteredVideos(videosData);
      } catch (err) {
        console.error("Failed to fetch videos:", err);
      } finally {
        setLoading(false);
      }
    };

    void fetchVideos();
  }, []);

  // Get unique categories and series for filters
  const categories = ["all", ...new Set(videos.map((v) => v.category))];
  const seriesList = [
    "all",
    ...new Set(videos.filter((v) => v.series).map((v) => v.series!)),
  ];

  // Filter videos based on selections
  useEffect(() => {
    let filtered = [...videos];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((v) => v.category === selectedCategory);
    }

    if (selectedSeries !== "all") {
      filtered = filtered.filter((v) => v.series === selectedSeries);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (v) =>
          (isBangla && v.titleBn.toLowerCase().includes(term)) ||
          (!isBangla && v.title.toLowerCase().includes(term)) ||
          (isBangla && v.presenterBn.toLowerCase().includes(term)) ||
          (!isBangla && v.presenter.toLowerCase().includes(term)),
      );
    }

    setFilteredVideos(filtered);
  }, [selectedCategory, selectedSeries, searchTerm, videos, isBangla]);

  const getLocalizedTitle = (video: Video) => {
    return isBangla && video.titleBn ? video.titleBn : video.title;
  };

  const getLocalizedDescription = (video: Video) => {
    return isBangla && video.descriptionBn
      ? video.descriptionBn
      : video.description;
  };

  const getLocalizedPresenter = (video: Video) => {
    return isBangla && video.presenterBn ? video.presenterBn : video.presenter;
  };

  const getLocalizedSeries = (video: Video) => {
    if (isBangla && video.seriesBn) {
      return video.seriesBn;
    }
    return video.series ?? "";
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isBangla ? "bn-BD" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-gray-700">
        <p>{isBangla ? "ভিডিও লোড হচ্ছে..." : "Loading videos..."}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-['Inter']">
      {/* Header Section */}
      <section>
        <h2
          className="my-6 rounded-md bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-center text-3xl font-bold text-white shadow-md"
          dir={isBangla ? "ltr" : "ltr"}
        >
          🎬 {isBangla ? "ইসলামিক ভিডিও লাইব্রেরি" : "Islamic Video Library"}
        </h2>
        <div className="mb-8 rounded-lg bg-white p-6 leading-relaxed text-gray-700 shadow-lg">
          <p className="text-center text-lg" dir={isBangla ? "rtl" : "ltr"}>
            {isBangla
              ? "আমাদের ভিডিও লাইব্রেরিতে ইসলামিক জ্ঞান, কুরআন শিক্ষা, এবং আধ্যাত্মিক উন্নয়নের জন্য বিস্তৃত ভিডিও সংগ্রহ রয়েছে। ভিডিওতে ক্লিক করে সরাসরি দেখুন অথবা ইউটিউবে খুলুন।"
              : "Our video library features a wide collection of Islamic knowledge, Quran education, and spiritual development content. Click on any video to watch directly or open on YouTube."}
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder={isBangla ? "ভিডিও অনুসন্ধান..." : "Search videos..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
          />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-200"
        >
          <span className="font-semibold">
            {isBangla ? "ফিল্টার করুন" : "Filter Videos"}
          </span>
          {showFilters ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {/* Filter Options */}
        {showFilters && (
          <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {isBangla ? "বিষয়" : "Category"}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
              >
                <option value="all">
                  {isBangla ? "সব" : "All Categories"}
                </option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {isBangla
                      ? videos.find((v) => v.category === category)?.categoryBn
                      : category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {isBangla ? "সিরিজ" : "Series"}
              </label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
              >
                <option value="all">
                  {isBangla ? "সব সিরিজ" : "All Series"}
                </option>
                {seriesList.slice(1).map((series) => (
                  <option key={series} value={series}>
                    {isBangla
                      ? videos.find((v) => v.series === series)?.seriesBn
                      : series}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-gray-600">
        {filteredVideos.length}{" "}
        {isBangla ? "টি ভিডিও পাওয়া গেছে" : "videos found"}
      </div>

      {/* Videos Grid - 3 columns on large screens */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isBangla={isBangla}
            getLocalizedTitle={getLocalizedTitle}
            getLocalizedDescription={getLocalizedDescription}
            getLocalizedPresenter={getLocalizedPresenter}
            getLocalizedSeries={getLocalizedSeries}
            formatViews={formatViews}
            formatDate={formatDate}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="py-12 text-center">
          <div className="mb-4 text-6xl">🎬</div>
          <p className="text-xl text-gray-600">
            {isBangla ? "কোনো ভিডিও পাওয়া যায়নি" : "No videos found"}
          </p>
          <p className="mt-2 text-gray-500">
            {isBangla
              ? "অনুগ্রহ করে ভিন্ন ফিল্টার নির্বাচন করুন"
              : "Please try different filters"}
          </p>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
