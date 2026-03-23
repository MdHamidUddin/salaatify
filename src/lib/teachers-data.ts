export type Teacher = {
  id: number;
  name: string;
  nameBn: string;
  degree: string;
  degreeBn: string;
  position: string;
  positionBn: string;
  image: string;
  bio?: string;
  bioBn?: string;
  specialization?: string;
  specializationBn?: string;
  experience?: string;
  experienceBn?: string;
  subjects?: string[];
  subjectsBn?: string[];
};

export const teachersData: Teacher[] = [
  {
    id: 1,
    name: "Maulana Qari Md. Aminul Ahad",
    nameBn: "মাওলানা কারী মোঃ আমিনুল আহাদ",
    degree: "Master's in Quranic Studies, Al-Azhar University",
    degreeBn: "কুরআনিক স্টাডিজে স্নাতকোত্তর, আল-আজহার বিশ্ববিদ্যালয়",
    position: "Head of Hafizia Program",
    positionBn: "হাফিজিয়া প্রোগ্রামের প্রধান",
    image: "/team/amin.jpeg",
    bio: "With over 20 years of experience in Quran memorization and teaching, Qari Abdul Rahman has helped hundreds of students become Hafiz. His unique teaching methodology combines traditional memorization techniques with modern pedagogical approaches.",
    bioBn:
      "কুরআন মুখস্থ এবং শিক্ষাদানে ২০ বছরেরও বেশি অভিজ্ঞতা নিয়ে, কারী আব্দুর রহমান শত শত শিক্ষার্থীকে হাফিজ হতে সাহায্য করেছেন। তাঁর অনন্য শিক্ষা পদ্ধতি ঐতিহ্যবাহী মুখস্থ কৌশলকে আধুনিক শিক্ষাগত পদ্ধতির সাথে একত্রিত করে।",
    specialization: "Quran Memorization, Tajweed, Qira'at",
    specializationBn: "কুরআন মুখস্থ, তাজবীদ, কিরাআত",
    experience: "20+ years",
    experienceBn: "২০+ বছর",
    subjects: ["Quran Memorization", "Tajweed Rules", "Qira'at Styles"],
    subjectsBn: ["কুরআন মুখস্থ", "তাজবীদ নিয়ম", "কিরাআত শৈলী"],
  },
  {
    id: 2,
    name: "Hafez Md Tareq Jamil",
    nameBn: "হাফেজ মোঃ তারেক জামিল",
    degree: "Mufti, Darul Uloom Deoband; PhD in Islamic Jurisprudence",
    degreeBn: "মুফতি, দারুল উলূম দেওবন্দ; ইসলামিক আইনশাস্ত্রে পিএইচডি",
    position: "Head of General Madrasa Education",
    positionBn: "সাধারণ মাদ্রাসা শিক্ষার প্রধান",
    image: "/team/tarek-jamil.jpeg",
    bio: "A renowned Islamic scholar with expertise in Fiqh, Hadith, and Islamic jurisprudence. Mufti Abdullah has authored several books on contemporary Islamic issues and has been teaching for over 15 years.",
    bioBn:
      "ফিকহ, হাদিস এবং ইসলামিক আইনশাস্ত্রে দক্ষতা সম্পন্ন একজন প্রখ্যাত ইসলামিক পণ্ডিত। মুফতি আব্দুল্লাহ সমসাময়িক ইসলামিক বিষয়ে বেশ কয়েকটি বই রচনা করেছেন এবং ১৫ বছরেরও বেশি সময় ধরে শিক্ষাদান করছেন।",
    specialization: "Fiqh, Hadith, Islamic Jurisprudence",
    specializationBn: "ফিকহ, হাদিস, ইসলামিক আইনশাস্ত্র",
    experience: "15+ years",
    experienceBn: "১৫+ বছর",
    subjects: ["Fiqh", "Hadith Studies", "Islamic Jurisprudence", "Aqeedah"],
    subjectsBn: ["ফিকহ", "হাদিস অধ্যয়ন", "ইসলামিক আইনশাস্ত্র", "আকীদা"],
  },
  //   {
  //     id: 3,
  //     name: "Qari Muhammad Ali",
  //     nameBn: "কারী মুহাম্মদ আলী",
  //     degree: "Master's in Tajweed & Qira'at, International Islamic University",
  //     degreeBn: "তাজবীদ ও কিরাআতে স্নাতকোত্তর, আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয়",
  //     position: "Head of Tajweed & Quran Recitation",
  //     positionBn: "তাজবীদ ও কুরআন তিলাওয়াতের প্রধান",
  //     image: "/teachers/teacher1.jpg",
  //     bio: "A master of Tajweed and Qira'at, Qari Muhammad Ali is known for his beautiful recitation and ability to teach students of all levels. He has trained thousands of students in proper Quran recitation techniques.",
  //     bioBn:
  //       "তাজবীদ ও কিরাআতে একজন দক্ষ, কারী মুহাম্মদ আলী তাঁর সুন্দর তিলাওয়াত এবং সকল স্তরের শিক্ষার্থীদের শিক্ষা দেওয়ার ক্ষমতার জন্য পরিচিত। তিনি সঠিক কুরআন তিলাওয়াত কৌশলে হাজার হাজার শিক্ষার্থীকে প্রশিক্ষণ দিয়েছেন।",
  //     specialization: "Tajweed, Qira'at, Quran Recitation",
  //     specializationBn: "তাজবীদ, কিরাআত, কুরআন তিলাওয়াত",
  //     experience: "12+ years",
  //     experienceBn: "১২+ বছর",
  //     subjects: [
  //       "Tajweed Rules",
  //       "Qira'at Styles",
  //       "Advanced Recitation",
  //       "Quran Phonetics",
  //     ],
  //     subjectsBn: [
  //       "তাজবীদ নিয়ম",
  //       "কিরাআত শৈলী",
  //       "উন্নত তিলাওয়াত",
  //       "কুরআন ধ্বনিতত্ত্ব",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Sheikh Dr. Muhammad Kamal",
  //     nameBn: "শাইখ ডা. মুহাম্মদ কামাল",
  //     degree: "PhD in Islamic Studies, University of Medina",
  //     degreeBn: "ইসলামিক স্টাডিজে পিএইচডি, মদিনা বিশ্ববিদ্যালয়",
  //     position: "Head of Youth Islamic Studies",
  //     positionBn: "যুব ইসলামিক স্টাডিজের প্রধান",
  //     image: "/teachers/teacher1.jpg",
  //     bio: "Specializing in youth education and modern Islamic thought, Dr. Kamal has dedicated his career to making Islamic knowledge accessible and relevant to young Muslims. He is a sought-after speaker at international conferences.",
  //     bioBn:
  //       "যুব শিক্ষা এবং আধুনিক ইসলামিক চিন্তাধারায় বিশেষজ্ঞ, ডা. কামাল তাঁর কর্মজীবন ইসলামিক জ্ঞানকে তরুণ মুসলিমদের কাছে সহজলভ্য এবং প্রাসঙ্গিক করার জন্য উৎসর্গ করেছেন। তিনি আন্তর্জাতিক সম্মেলনে একজন জনপ্রিয় বক্তা।",
  //     specialization: "Islamic Thought, Youth Education, Contemporary Issues",
  //     specializationBn: "ইসলামিক চিন্তাধারা, যুব শিক্ষা, সমসাময়িক বিষয়",
  //     experience: "10+ years",
  //     experienceBn: "১০+ বছর",
  //     subjects: [
  //       "Islamic Ethics",
  //       "Modern Challenges",
  //       "Leadership Skills",
  //       "Contemporary Fiqh",
  //     ],
  //     subjectsBn: [
  //       "ইসলামী নৈতিকতা",
  //       "আধুনিক চ্যালেঞ্জ",
  //       "নেতৃত্বের দক্ষতা",
  //       "সমসাময়িক ফিকহ",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Dr. Fatima Begum",
  //     nameBn: "ডা. ফাতেমা বেগম",
  //     degree: "PhD in Arabic Literature, Cairo University",
  //     degreeBn: "আরবি সাহিত্যে পিএইচডি, কায়রো বিশ্ববিদ্যালয়",
  //     position: "Head of Arabic Language Department",
  //     positionBn: "আরবি ভাষা বিভাগের প্রধান",
  //     image: "/teachers/teacher1.jpg",
  //     bio: "An expert in Arabic language and literature, Dr. Fatima has developed innovative teaching methods that make learning Arabic easy and enjoyable. She has published numerous research papers on Arabic linguistics.",
  //     bioBn:
  //       "আরবি ভাষা ও সাহিত্যে একজন বিশেষজ্ঞ, ডা. ফাতেমা উদ্ভাবনী শিক্ষা পদ্ধতি তৈরি করেছেন যা আরবি শেখাকে সহজ এবং আনন্দদায়ক করে তোলে। তিনি আরবি ভাষাতত্ত্বের উপর অসংখ্য গবেষণাপত্র প্রকাশ করেছেন।",
  //     specialization: "Arabic Language, Literature, Linguistics",
  //     specializationBn: "আরবি ভাষা, সাহিত্য, ভাষাতত্ত্ব",
  //     experience: "8+ years",
  //     experienceBn: "৮+ বছর",
  //     subjects: [
  //       "Arabic Grammar",
  //       "Arabic Literature",
  //       "Quranic Arabic",
  //       "Arabic Conversation",
  //     ],
  //     subjectsBn: [
  //       "আরবি ব্যাকরণ",
  //       "আরবি সাহিত্য",
  //       "কুরআনিক আরবি",
  //       "আরবি কথোপকথন",
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Hafiz Ahmed Hossain",
  //     nameBn: "হাফিজ আহমেদ হোসেন",
  //     degree: "Hafiz & Alim, Jamia Islamia; BA in Islamic Studies",
  //     degreeBn: "হাফিজ ও আলিম, জামিয়া ইসলামিয়া; ইসলামিক স্টাডিজে স্নাতক",
  //     position: "Senior Teacher, Quran Memorization",
  //     positionBn: "সিনিয়র শিক্ষক, কুরআন মুখস্থ",
  //     image: "/teachers/teacher1.jpg",
  //     bio: "A passionate educator with a gift for working with children, Hafiz Ahmed has helped over 500 young students complete their Quran memorization. His patient and encouraging approach makes learning enjoyable.",
  //     bioBn:
  //       "শিশুদের সাথে কাজ করার প্রতিভা সম্পন্ন একজন উদ্যমী শিক্ষাবিদ, হাফিজ আহমেদ ৫০০-এর বেশি তরুণ শিক্ষার্থীকে তাদের কুরআন মুখস্থ সম্পূর্ণ করতে সাহায্য করেছেন। তাঁর ধৈর্যশীল এবং উৎসাহদায়ক পদ্ধতি শিক্ষাকে আনন্দদায়ক করে তোলে।",
  //     specialization: "Quran Memorization, Child Education",
  //     specializationBn: "কুরআন মুখস্থ, শিশু শিক্ষা",
  //     experience: "7+ years",
  //     experienceBn: "৭+ বছর",
  //     subjects: [
  //       "Quran Memorization Techniques",
  //       "Revision Methods",
  //       "Tajweed for Beginners",
  //     ],
  //     subjectsBn: [
  //       "কুরআন মুখস্থ কৌশল",
  //       "পুনরাবৃত্তির পদ্ধতি",
  //       "শিক্ষানবিসদের জন্য তাজবীদ",
  //     ],
  //   },
];
