export type Course = {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  duration: string;
  durationBn: string;
  level: string;
  levelBn: string;
  price: string;
  priceBn: string;
  instructor: string;
  instructorBn: string;
  curriculum: string[];
  curriculumBn: string[];
  requirements: string[];
  requirementsBn: string[];
  learningOutcomes: string[];
  learningOutcomesBn: string[];
  enrolled: number;
  rating: number;
};

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Hafizia Program (Full Quran Memorization)",
    titleBn: "হাফিজিয়া প্রোগ্রাম (পূর্ণ কুরআন মুখস্থ)",
    description:
      "A comprehensive program designed to help students memorize the entire Quran with proper Tajweed rules and understanding.",
    descriptionBn:
      "সঠিক তাজবীদ নিয়ম এবং বোঝাপড়া সহ সম্পূর্ণ কুরআন মুখস্থ করতে শিক্ষার্থীদের সাহায্য করার জন্য একটি বিস্তৃত প্রোগ্রাম।",
    image: "/courses/hafizia.jpeg",
    duration: "2-3 Years",
    durationBn: "২-৩ বছর",
    level: "Advanced",
    levelBn: "উন্নত",
    price: "Donation Based",
    priceBn: "দানভিত্তিক",
    instructor: "Hafez Md Tareq Jamil",
    instructorBn: "হাফেজ মোঃ তারেক জামিল",
    curriculum: [
      "Introduction to Tajweed rules",
      "Daily memorization (1-2 pages)",
      "Revision techniques",
      "Understanding of verses",
      "Qira'at styles",
      "Final review and certification",
    ],
    curriculumBn: [
      "তাজবীদ নিয়মের পরিচিতি",
      "দৈনিক মুখস্থ (১-২ পৃষ্ঠা)",
      "পুনরাবৃত্তির কৌশল",
      "আয়াতের বোঝাপড়া",
      "কিরাআত শৈলী",
      "চূড়ান্ত পর্যালোচনা এবং সনদ",
    ],
    requirements: [
      "Ability to read Arabic fluently",
      "Basic Tajweed knowledge",
      "Commitment to daily practice",
      "Age 10 years or above",
    ],
    requirementsBn: [
      "আরবি সাবলীলভাবে পড়ার ক্ষমতা",
      "মৌলিক তাজবীদ জ্ঞান",
      "দৈনিক অনুশীলনে প্রতিশ্রুতি",
      "১০ বছর বা তার বেশি বয়স",
    ],
    learningOutcomes: [
      "Complete memorization of the Quran",
      "Mastery of Tajweed rules",
      "Understanding of Quranic Arabic",
      "Ability to lead prayers",
      "Teaching certification",
    ],
    learningOutcomesBn: [
      "কুরআনের সম্পূর্ণ মুখস্থ",
      "তাজবীদ নিয়মে দক্ষতা",
      "কুরআনিক আরবি বোঝাপড়া",
      "নামাজে ইমামতি করার ক্ষমতা",
      "শিক্ষাদানের সনদ",
    ],
    enrolled: 25,
    rating: 4.9,
  },
  // {
  //   id: 2,
  //   title: "General Madrasa Education",
  //   titleBn: "সাধারণ মাদ্রাসা শিক্ষা",
  //   description:
  //     "A comprehensive Islamic education program covering Quran, Hadith, Fiqh, and Islamic history for holistic development.",
  //   descriptionBn:
  //     "সম্পূর্ণ বিকাশের জন্য কুরআন, হাদিস, ফিকহ এবং ইসলামিক ইতিহাস সম্বলিত একটি বিস্তৃত ইসলামিক শিক্ষা প্রোগ্রাম।",
  //   image: "/courses/course2.png",
  //   duration: "4-5 Years",
  //   durationBn: "৪-৫ বছর",
  //   level: "Intermediate",
  //   levelBn: "মাধ্যমিক",
  //   price: "Free / Sponsorship Available",
  //   priceBn: "বিনামূল্যে / স্পন্সরশিপ উপলব্ধ",
  //   instructor: "Mufti Abdullah Al-Mahmud",
  //   instructorBn: "মুফতি আব্দুল্লাহ আল-মাহমুদ",
  //   curriculum: [
  //     "Quran with Tafsir",
  //     "Hadith Studies (Sahih Bukhari, Muslim)",
  //     "Fiqh (Islamic Jurisprudence)",
  //     "Aqeedah (Islamic Creed)",
  //     "Islamic History and Civilization",
  //     "Arabic Language and Literature",
  //     "Seerah of Prophet (PBUH)",
  //     "Islamic Ethics and Morals",
  //   ],
  //   curriculumBn: [
  //     "তাফসির সহ কুরআন",
  //     "হাদিস অধ্যয়ন (সহীহ বুখারী, মুসলিম)",
  //     "ফিকহ (ইসলামী আইনশাস্ত্র)",
  //     "আকীদা (ইসলামী বিশ্বাস)",
  //     "ইসলামের ইতিহাস ও সভ্যতা",
  //     "আরবি ভাষা ও সাহিত্য",
  //     "নবীজির সীরাত (সাঃ)",
  //     "ইসলামী নৈতিকতা ও আদর্শ",
  //   ],
  //   requirements: [
  //     "Basic knowledge of Quran reading",
  //     "Age 12 years or above",
  //     "Interest in Islamic studies",
  //     "Regular attendance commitment",
  //   ],
  //   requirementsBn: [
  //     "কুরআন পড়ার মৌলিক জ্ঞান",
  //     "১২ বছর বা তার বেশি বয়স",
  //     "ইসলামিক অধ্যয়নে আগ্রহ",
  //     "নিয়মিত উপস্থিতির প্রতিশ্রুতি",
  //   ],
  //   learningOutcomes: [
  //     "Comprehensive understanding of Islamic sciences",
  //     "Ability to interpret Quran and Hadith",
  //     "Knowledge of Islamic jurisprudence",
  //     "Arabic language proficiency",
  //     "Foundation for higher Islamic studies",
  //   ],
  //   learningOutcomesBn: [
  //     "ইসলামিক বিজ্ঞানের ব্যাপক বোধগম্যতা",
  //     "কুরআন ও হাদিস ব্যাখ্যার ক্ষমতা",
  //     "ইসলামী আইনশাস্ত্রের জ্ঞান",
  //     "আরবি ভাষায় দক্ষতা",
  //     "উচ্চতর ইসলামিক অধ্যয়নের ভিত্তি",
  //   ],
  //   enrolled: 2350,
  //   rating: 4.8,
  // },
  {
    id: 3,
    title: "Tajweed & Quran Recitation Course",
    titleBn: "তাজবীদ ও কুরআন তিলাওয়াত কোর্স",
    description:
      "Master the art of Quran recitation with proper Tajweed rules and beautiful voice modulation techniques.",
    descriptionBn:
      "সঠিক তাজবীদ নিয়ম এবং সুন্দর কণ্ঠস্বর মড্যুলেশন কৌশল সহ কুরআন তিলাওয়াতের শিল্পে দক্ষতা অর্জন করুন।",
    image: "/courses/course2.png",
    duration: "6-12 Months",
    durationBn: "৬-১২ মাস",
    level: "Beginner to Advanced",
    levelBn: "শিক্ষানবিস থেকে উন্নত",
    price: "Donation Based",
    priceBn: "দানভিত্তিক",
    instructor: "Maulana Qari Md. Aminul Ahad",
    instructorBn: "মাওলানা কারী মোঃ আমিনুল আহাদ",
    curriculum: [
      "Introduction to Tajweed",
      "Articulation points (Makharij)",
      "Characteristics of letters (Sifaat)",
      "Rules of Noon Saakin and Tanween",
      "Rules of Meem Saakin",
      "Rules of Madd (Prolongation)",
      "Practical application in Surahs",
      "Advanced recitation techniques",
    ],
    curriculumBn: [
      "তাজবীদের পরিচিতি",
      "উচ্চারণ স্থান (মাখরাজ)",
      "অক্ষরের বৈশিষ্ট্য (সিফাত)",
      "নূন সাকিন ও তানভীনের নিয়ম",
      "মীম সাকিনের নিয়ম",
      "মাদ্দের নিয়ম (দীর্ঘায়ন)",
      "সূরায় ব্যবহারিক প্রয়োগ",
      "উন্নত তিলাওয়াত কৌশল",
    ],
    requirements: [
      "Ability to read Arabic letters",
      "Basic Quran reading skills",
      "Commitment to practice",
    ],
    requirementsBn: [
      "আরবি অক্ষর পড়ার ক্ষমতা",
      "মৌলিক কুরআন পড়ার দক্ষতা",
      "অনুশীলনে প্রতিশ্রুতি",
    ],
    learningOutcomes: [
      "Perfect pronunciation of Arabic letters",
      "Mastery of basic Tajweed rules",
      "Beautiful Quran recitation",
      "Confidence to lead prayers",
    ],
    learningOutcomesBn: [
      "আরবি অক্ষরের সঠিক উচ্চারণ",
      "মৌলিক তাজবীদ নিয়মে দক্ষতা",
      "সুন্দর কুরআন তিলাওয়াত",
      "নামাজে ইমামতি করার আত্মবিশ্বাস",
    ],
    enrolled: 25,
    rating: 4.9,
  },
  // {
  //   id: 4,
  //   title: "Islamic Studies for Youth",
  //   titleBn: "যুবকদের জন্য ইসলামিক স্টাডিজ",
  //   description:
  //     "A comprehensive program designed to equip young Muslims with essential Islamic knowledge and modern life skills.",
  //   descriptionBn:
  //     "তরুণ মুসলিমদের প্রয়োজনীয় ইসলামিক জ্ঞান এবং আধুনিক জীবন দক্ষতা দিয়ে সজ্জিত করার জন্য ডিজাইন করা একটি বিস্তৃত প্রোগ্রাম।",
  //   image: "/courses/course2.png",
  //   duration: "2 Years",
  //   durationBn: "২ বছর",
  //   level: "Intermediate",
  //   levelBn: "মাধ্যমিক",
  //   price: "Free / Monthly 2000 BDT",
  //   priceBn: "বিনামূল্যে / মাসিক ২০০০ টাকা",
  //   instructor: "Sheikh Dr. Muhammad Kamal",
  //   instructorBn: "শাইখ ডা. মুহাম্মদ কামাল",
  //   curriculum: [
  //     "Aqeedah (Islamic Creed)",
  //     "Fiqh of Worship",
  //     "Seerah of Prophet Muhammad (PBUH)",
  //     "Tafsir of selected Surahs",
  //     "Hadith Studies",
  //     "Islamic Ethics",
  //     "Modern Challenges and Islam",
  //     "Leadership Skills",
  //   ],
  //   curriculumBn: [
  //     "আকীদা (ইসলামী বিশ্বাস)",
  //     "ইবাদতের ফিকহ",
  //     "নবী মুহাম্মদের সীরাত (সাঃ)",
  //     "নির্বাচিত সূরার তাফসীর",
  //     "হাদীস অধ্যয়ন",
  //     "ইসলামী নৈতিকতা",
  //     "আধুনিক চ্যালেঞ্জ ও ইসলাম",
  //     "নেতৃত্বের দক্ষতা",
  //   ],
  //   requirements: [
  //     "Age 13-25 years",
  //     "Basic Islamic knowledge",
  //     "Commitment to weekly classes",
  //   ],
  //   requirementsBn: [
  //     "১৩-২৫ বছর বয়স",
  //     "মৌলিক ইসলামিক জ্ঞান",
  //     "সাপ্তাহিক ক্লাসে প্রতিশ্রুতি",
  //   ],
  //   learningOutcomes: [
  //     "Strong foundation in Islamic sciences",
  //     "Practical understanding of Islam",
  //     "Ability to navigate modern challenges",
  //     "Leadership and communication skills",
  //   ],
  //   learningOutcomesBn: [
  //     "ইসলামিক বিজ্ঞানে শক্ত ভিত্তি",
  //     "ইসলামের ব্যবহারিক বোধগম্যতা",
  //     "আধুনিক চ্যালেঞ্জ মোকাবেলার ক্ষমতা",
  //     "নেতৃত্ব ও যোগাযোগ দক্ষতা",
  //   ],
  //   enrolled: 1870,
  //   rating: 4.7,
  // },
];
