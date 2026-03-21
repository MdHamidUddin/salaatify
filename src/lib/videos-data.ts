export type Video = {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  youtubeId: string;
  embedUrl: string;
  thumbnail: string;
  duration: string;
  category: string;
  categoryBn: string;
  date: string;
  views: number;
  presenter: string;
  presenterBn: string;
  series?: string;
  seriesBn?: string;
  featured?: boolean;
};

export const videosData: Video[] = [
  {
    id: "1",
    title: "The 99 Names of Allah - Part 1",
    titleBn: "আল্লাহর ৯৯ নাম - পর্ব ১",
    description:
      "Learn the beautiful names of Allah and their meanings. This series covers each name with detailed explanation.",
    descriptionBn:
      "আল্লাহর সুন্দর নাম এবং তাদের অর্থ শিখুন। এই সিরিজটি প্রতিটি নাম বিস্তারিত ব্যাখ্যা সহ কভার করে।",
    youtubeId: "RvzHh3TogoU",
    embedUrl: "https://www.youtube.com/embed/RvzHh3TogoU",
    thumbnail: "https://img.youtube.com/vi/RvzHh3TogoU/maxresdefault.jpg",
    duration: "15:24",
    category: "Islamic Knowledge",
    categoryBn: "ইসলামিক জ্ঞান",
    date: "2024-03-15",
    views: 12500,
    presenter: "Dr. Zakir Naik",
    presenterBn: "ডা. যাকির নায়েক",
    series: "99 Names of Allah",
    seriesBn: "আল্লাহর ৯৯ নাম",
    featured: true,
  },
  {
    id: "2",
    title: "How to Pray Salah - Complete Guide",
    titleBn: "কিভাবে সালাত আদায় করবেন - সম্পূর্ণ গাইড",
    description:
      "Step by step guide on how to perform Salah correctly according to Sunnah.",
    descriptionBn: "সুন্নাহ অনুযায়ী সঠিকভাবে সালাত আদায় করার ধাপে ধাপে গাইড।",
    youtubeId: "J2zq41iAf3k",
    embedUrl: "https://www.youtube.com/embed/J2zq41iAf3k",
    thumbnail: "https://img.youtube.com/vi/J2zq41iAf3k/maxresdefault.jpg",
    duration: "22:15",
    category: "Prayer",
    categoryBn: "নামাজ",
    date: "2024-03-10",
    views: 34200,
    presenter: "Mufti Menk",
    presenterBn: "মুফতি মেনক",
    featured: true,
  },
  //   {
  //     id: "3",
  //     title: "Tajweed Rules for Beginners",
  //     titleBn: "শিক্ষানবিসদের জন্য তাজবীদ নিয়ম",
  //     description:
  //       "Learn the basic rules of Tajweed to recite the Quran beautifully.",
  //     descriptionBn:
  //       "কুরআন সুন্দরভাবে তিলাওয়াত করতে তাজবীদের মৌলিক নিয়ম শিখুন।",
  //     youtubeId: "kJQP7kiw5Fk",
  //     embedUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  //     thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
  //     duration: "18:42",
  //     category: "Quran",
  //     categoryBn: "কুরআন",
  //     date: "2024-03-05",
  //     views: 28700,
  //     presenter: "Qari Abdul Rahman",
  //     presenterBn: "কারী আব্দুর রহমান",
  //     series: "Tajweed Made Easy",
  //     seriesBn: "তাজবীদ সহজ পদ্ধতিতে",
  //   },
  //   {
  //     id: "4",
  //     title: "Stories of the Prophets - Prophet Muhammad (PBUH)",
  //     titleBn: "নবীগণের কাহিনী - হযরত মুহাম্মদ (সা.)",
  //     description:
  //       "Beautiful narration of the life and teachings of Prophet Muhammad (PBUH).",
  //     descriptionBn: "হযরত মুহাম্মদ (সা.)-এর জীবন ও শিক্ষার সুন্দর বর্ণনা।",
  //     youtubeId: "tgbNymZ7vqY",
  //     embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  //     thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
  //     duration: "25:30",
  //     category: "Islamic History",
  //     categoryBn: "ইসলামিক ইতিহাস",
  //     date: "2024-02-28",
  //     views: 45100,
  //     presenter: "Sheikh Omar Suleiman",
  //     presenterBn: "শাইখ ওমর সুলেমান",
  //     series: "Stories of the Prophets",
  //     seriesBn: "নবীগণের কাহিনী",
  //     featured: true,
  //   },
  //   {
  //     id: "5",
  //     title: "The Power of Dua - How to Make Effective Supplication",
  //     titleBn: "দুয়ার শক্তি - কীভাবে কার্যকর দোয়া করবেন",
  //     description:
  //       "Learn the etiquettes and best times to make Dua for your needs.",
  //     descriptionBn: "আপনার প্রয়োজনীয় দোয়া করার আদব এবং সর্বোত্তম সময় শিখুন।",
  //     youtubeId: "JGwWNGJdvx8",
  //     embedUrl: "https://www.youtube.com/embed/JGwWNGJdvx8",
  //     thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
  //     duration: "12:18",
  //     category: "Spirituality",
  //     categoryBn: "আধ্যাত্মিকতা",
  //     date: "2024-02-20",
  //     views: 18900,
  //     presenter: "Nouman Ali Khan",
  //     presenterBn: "নোমান আলী খান",
  //   },
  //   {
  //     id: "6",
  //     title: "Understanding the Quran - Surah Al-Fatiha",
  //     titleBn: "কুরআন বোঝা - সূরা আল-ফাতিহা",
  //     description:
  //       "Deep dive into the meaning and significance of Surah Al-Fatiha.",
  //     descriptionBn: "সূরা আল-ফাতিহার অর্থ ও গুরুত্ব নিয়ে গভীর আলোচনা।",
  //     youtubeId: "OPf0YbXqDm0",
  //     embedUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
  //     thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg",
  //     duration: "20:45",
  //     category: "Quran",
  //     categoryBn: "কুরআন",
  //     date: "2024-02-15",
  //     views: 22300,
  //     presenter: "Dr. Yasir Qadhi",
  //     presenterBn: "ডা. ইয়াসির কাদি",
  //     series: "Understanding the Quran",
  //     seriesBn: "কুরআন বোঝা",
  //   },
  //   {
  //     id: "7",
  //     title: "The Importance of Family in Islam",
  //     titleBn: "ইসলামে পরিবারের গুরুত্ব",
  //     description:
  //       "Islamic teachings on maintaining strong family bonds and relationships.",
  //     descriptionBn:
  //       "শক্তিশালী পারিবারিক বন্ধন ও সম্পর্ক বজায় রাখার ইসলামী শিক্ষা।",
  //     youtubeId: "RgKAFK5djSk",
  //     embedUrl: "https://www.youtube.com/embed/RgKAFK5djSk",
  //     thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg",
  //     duration: "16:50",
  //     category: "Lifestyle",
  //     categoryBn: "জীবনধারা",
  //     date: "2024-02-10",
  //     views: 15600,
  //     presenter: "Mufti Ismail Menk",
  //     presenterBn: "মুফতি ইসমাইল মেনক",
  //   },
  //   {
  //     id: "8",
  //     title: "The Hereafter - Life After Death",
  //     titleBn: "পরকাল - মৃত্যুর পরের জীবন",
  //     description:
  //       "Understanding the stages of the afterlife in Islamic perspective.",
  //     descriptionBn: "ইসলামিক দৃষ্টিকোণ থেকে পরকালের পর্যায়গুলি বোঝা।",
  //     youtubeId: "fJ9rUzIMcZQ",
  //     embedUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
  //     thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
  //     duration: "28:15",
  //     category: "Akhirah",
  //     categoryBn: "আখিরাত",
  //     date: "2024-02-05",
  //     views: 31200,
  //     presenter: "Sheikh Assim Al-Hakeem",
  //     presenterBn: "শাইখ আসিম আল-হাকিম",
  //     featured: true,
  //   },
  //   {
  //     id: "9",
  //     title: "Islamic Manners for Children",
  //     titleBn: "শিশুদের জন্য ইসলামী আদব-কায়দা",
  //     description:
  //       "Teaching children good manners and etiquette based on Islamic teachings.",
  //     descriptionBn:
  //       "ইসলামী শিক্ষার ভিত্তিতে শিশুদের সদাচার ও শিষ্টাচার শিক্ষা দেওয়া।",
  //     youtubeId: "CevxZvSJLk8",
  //     embedUrl: "https://www.youtube.com/embed/CevxZvSJLk8",
  //     thumbnail: "https://img.youtube.com/vi/CevxZvSJLk8/maxresdefault.jpg",
  //     duration: "14:20",
  //     category: "Children",
  //     categoryBn: "শিশু",
  //     date: "2024-01-28",
  //     views: 9800,
  //     presenter: "Sister Fatima Barkatulla",
  //     presenterBn: "সিস্টার ফাতিমা বারকাতুল্লাহ",
  //   },
];
