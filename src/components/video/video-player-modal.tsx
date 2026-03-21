"use client";

import { useEffect, useState } from "react";
import { X, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  videoTitle: string;
  youtubeUrl: string;
}

export const VideoPlayerModal = ({
  isOpen,
  onClose,
  videoUrl,
  videoTitle,
  youtubeUrl,
}: VideoPlayerModalProps) => {
  const { i18n } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isBangla = i18n.language === "bn";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleFullscreen = () => {
    const modalContent = document.getElementById("video-modal-content");
    if (!modalContent) return;

    if (!isFullscreen) {
      if (modalContent.requestFullscreen) {
        void modalContent.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        void document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div
        id="video-modal-content"
        className="relative w-full max-w-5xl rounded-xl bg-black shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-xl bg-gray-900 px-4 py-3">
          <h3 className="line-clamp-1 text-lg font-semibold text-white">
            {videoTitle}
          </h3>
          <div className="flex items-center gap-2">
            {/* YouTube Link */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-red-500"
              title={isBangla ? "ইউটিউবে দেখুন" : "Open on YouTube"}
            >
              <ExternalLink className="h-5 w-5" />
            </a>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              title={isBangla ? "পূর্ণ স্ক্রীন" : "Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="h-5 w-5" />
              ) : (
                <Maximize2 className="h-5 w-5" />
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              title={isBangla ? "বন্ধ করুন" : "Close"}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="aspect-video w-full">
          <iframe
            src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={videoTitle}
            className="h-full w-full rounded-b-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        </div>

        {/* Footer */}
        <div className="rounded-b-xl bg-gray-900 px-4 py-3">
          <p className="text-sm text-gray-400">
            {isBangla
              ? "ভিডিওটি ইউটিউব থেকে এম্বেড করা হয়েছে। ইউটিউবে দেখতে ডান দিকের আইকনে ক্লিক করুন।"
              : "Video embedded from YouTube. Click the YouTube icon to watch on YouTube."}
          </p>
        </div>
      </div>
    </div>
  );
};
