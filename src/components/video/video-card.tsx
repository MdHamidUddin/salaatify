"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock, Eye, Calendar, User, Youtube } from "lucide-react";
import { VideoPlayerModal } from "./video-player-modal";
import type { Video } from "@/lib/videos-data";

interface VideoCardProps {
  video: Video;
  isBangla: boolean;
  getLocalizedTitle: (video: Video) => string;
  getLocalizedDescription: (video: Video) => string;
  getLocalizedPresenter: (video: Video) => string;
  getLocalizedSeries: (video: Video) => string;
  formatViews: (views: number) => string;
  formatDate: (dateString: string) => string;
}

export const VideoCard = ({
  video,
  isBangla,
  getLocalizedTitle,
  getLocalizedDescription,
  getLocalizedPresenter,
  getLocalizedSeries,
  formatViews,
  formatDate,
}: VideoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail with Play Button Overlay */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={getLocalizedTitle(video)}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="transform rounded-full bg-red-600 p-4 shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
            {video.duration}
          </div>
          {video.featured && (
            <div className="absolute left-2 top-2 rounded bg-gradient-to-r from-red-600 to-orange-500 px-2 py-1 text-xs font-semibold text-white">
              {isBangla ? "বিশেষ" : "Featured"}
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-4">
          <h3
            className="mb-2 line-clamp-2 text-lg font-bold text-gray-800 transition-colors hover:text-red-600"
            dir={isBangla ? "rtl" : "ltr"}
          >
            {getLocalizedTitle(video)}
          </h3>

          <p
            className="mb-3 line-clamp-2 text-sm text-gray-600"
            dir={isBangla ? "rtl" : "ltr"}
          >
            {getLocalizedDescription(video)}
          </p>

          {/* Metadata */}
          <div className="space-y-2 border-t border-gray-100 pt-3">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <User className="h-3 w-3" />
              <span>{getLocalizedPresenter(video)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>
                  {formatViews(video.views)} {isBangla ? "বার দেখা" : "views"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(video.date)}</span>
              </div>
            </div>
            {video.series && (
              <div className="inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                {getLocalizedSeries(video)}
              </div>
            )}
          </div>

          {/* Watch Buttons */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:from-red-700 hover:to-red-800"
            >
              <Play className="h-4 w-4 fill-white" />
              {isBangla ? "ভিডিওটি দেখুন" : "Watch Now"}
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              title={isBangla ? "ইউটিউবে খুলুন" : "Open on YouTube"}
            >
              <Youtube className="h-4 w-4 text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={video.embedUrl}
        videoTitle={getLocalizedTitle(video)}
        youtubeUrl={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      />
    </>
  );
};
