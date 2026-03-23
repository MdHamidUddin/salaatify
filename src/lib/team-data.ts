export type TeamMember = {
  id: number;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  image: string;
  description?: string;
  descriptionBn?: string;
  serialNo?: number;
};

export const teamMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Md. Abu Bakar Siddique Ronju",
    nameBn: "মো: আবু বকর সিদ্দিক রঞ্জু",
    role: "Adviser",
    roleBn: "উপদেষ্টা",
    image: "/team/ronju.jpeg",
    description:
      "Senior Adviser providing strategic guidance and oversight to ensure the organization's mission aligns with Islamic principles and community welfare.",
    descriptionBn:
      "সিনিয়র পরামর্শদাতা হিসেবে প্রতিষ্ঠানের লক্ষ্য ইসলামিক নীতি ও সম্প্রদায়ের কল্যাণের সাথে সামঞ্জস্যপূর্ণ রাখতে কৌশলগত পথনির্দেশনা প্রদান করছেন।",
    serialNo: 1,
  },
  {
    id: 2,
    name: "Alhaz Md. Shamim Ahmed",
    nameBn: "আলহাজ মো: শামীম আহমেদ",
    role: "Adviser",
    roleBn: "উপদেষ্টা",
    image: "/team/shamim.jpeg",
    description:
      "Dedicated Adviser contributing valuable insights to organizational policies and Islamic educational initiatives.",
    descriptionBn:
      "উপদেষ্টা হিসেবে সাংগঠনিক নীতি ও ইসলামিক শিক্ষা উদ্যোগে মূল্যবান অন্তর্দৃষ্টি প্রদান করে আসছেন।",
    serialNo: 2,
  },
  {
    id: 3,
    name: "Alhaz Mufti Saiful Islam",
    nameBn: "আলহাজ মুফতি সাইফুল ইসলাম",
    role: "Adviser",
    roleBn: "উপদেষ্টা",
    image: "/teachers/teacher1.jpg",
    description:
      "Dedicated Adviser contributing valuable insights to organizational policies and Islamic educational initiatives.",
    descriptionBn:
      "উপদেষ্টা হিসেবে সাংগঠনিক নীতি ও ইসলামিক শিক্ষা উদ্যোগে মূল্যবান অন্তর্দৃষ্টি প্রদান করে আসছেন।",
    serialNo: 3,
  },
  {
    id: 4,
    name: "Md. Mizanur Rahman",
    nameBn: "মো: মিজানুর রহমান",
    role: "President",
    roleBn: "সভাপতি",
    image: "/team/mizan.jpeg",
    description:
      "Executive President leading the organization with vision and dedication, driving Islamic education and community development initiatives.",
    descriptionBn:
      "সভাপতি হিসেবে দূরদর্শিতা ও নিষ্ঠার সাথে প্রতিষ্ঠান পরিচালনা করছেন এবং ইসলামিক শিক্ষা ও সম্প্রদায় উন্নয়ন কার্যক্রম এগিয়ে নিয়ে যাচ্ছেন।",
    serialNo: 4,
  },
  {
    id: 5,
    name: "Alhaz Md. Golam Mostafa",
    nameBn: "আলহাজ মো: গোলাম মোস্তফা",
    role: "Vice-President",
    roleBn: "সহ-সভাপতি",
    image: "/teachers/teacher1.jpg",
    description:
      "Vice-President supporting executive operations and assisting in organization's leadership initiatives for Islamic education and community welfare.",
    descriptionBn:
      "সহ-সভাপতি হিসেবে নির্বাহী কার্যক্রম সহায়তা করছেন এবং প্রতিষ্ঠানের ইসলামিক শিক্ষা ও সম্প্রদায় কল্যাণ সংক্রান্ত নেতৃত্ব উদ্যোগে সেবা করছেন।",
    serialNo: 5,
  },
  {
    id: 6,
    name: "Md. Rejwanul Karim Hanju",
    nameBn: "মো: রেজওয়ানুল করিম হাঞ্জু",
    role: "Secretary",
    roleBn: "সেক্রেটারি",
    image: "/team/hanju.jpeg",
    description:
      "Secretary overseeing administrative operations, coordinating organizational activities, and maintaining effective communication between departments.",
    descriptionBn:
      "সেক্রেটারি হিসেবে প্রশাসনিক কার্যক্রম তত্ত্বাবধান, সাংগঠনিক কার্যক্রমের সমন্বয় এবং বিভাগসমূহের মধ্যে কার্যকর যোগাযোগ বজায় রাখছেন।",
    serialNo: 6,
  },
  {
    id: 7,
    name: "Md. Shafiqul Islam Bablu",
    nameBn: "মো: শাফিকুল ইসলাম বাবলু",
    role: "Cashier",
    roleBn: "ক্যাশিয়ার",
    image: "/teachers/teacher1.jpg",
    description:
      "Financial Officer managing all monetary transactions, maintaining transparent accounting systems, and ensuring fiscal responsibility and accountability.",
    descriptionBn:
      "আর্থিক কর্মকর্তা হিসেবে সকল আর্থিক লেনদেন পরিচালনা, স্বচ্ছ হিসাব ব্যবস্থা রক্ষণাবেক্ষণ এবং আর্থিক দায়বদ্ধতা নিশ্চিত করছেন।",
    serialNo: 7,
  },
  {
    id: 8,
    name: "Qari Aminul Ahad",
    nameBn: "ক্বারি আমিনুল আহাদ",
    role: "Teacher",
    roleBn: "শিক্ষক",
    image: "/team/amin.jpeg",
    description:
      "Experienced Teacher specializing in Quran recitation and Islamic studies, dedicated to student development and spiritual growth.",
    descriptionBn:
      "অভিজ্ঞ শিক্ষক যিনি কুরআন তেলাওয়াত ও ইসলামিক অধ্যয়নে বিশেষজ্ঞ এবং ছাত্র উন্নয়ন ও আধ্যাত্মিক বৃদ্ধিতে নিবেদিত।",
    serialNo: 8,
  },
  {
    id: 9,
    name: "Hafez Tareq Jamil",
    nameBn: "হাফেজ তারেক জামিল",
    role: "Teacher",
    roleBn: "শিক্ষক",
    image: "/team/tarek-jamil.jpeg",
    description:
      "Hafiz and dedicated educator contributing to Quran memorization programs and supporting various community educational initiatives.",
    descriptionBn:
      "হাফিজ ও নিবেদিত শিক্ষক যিনি কুরআন মুখস্থকরণ কর্মসূচি এবং বিভিন্ন সম্প্রদায়সেবামূলক শিক্ষা উদ্যোগে অবদান রাখছেন।",
    serialNo: 9,
  },
  {
    id: 10,
    name: "Md. Rafi",
    nameBn: "মো: রাফি",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Active Member committed to supporting organizational programs and engaging in community service and Islamic education outreach.",
    descriptionBn:
      "সক্রিয় সদস্য যিনি সাংগঠনিক কর্মসূচি সমর্থন এবং সম্প্রদায়সেবা ও ইসলামিক শিক্ষা প্রসারে নিযুক্ত।",
    serialNo: 10,
  },
  {
    id: 11,
    name: "Md. Kabir Member",
    nameBn: "মো: কবির মেম্বার",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Member actively involved in community outreach programs and supporting the organization's Islamic educational mission.",
    descriptionBn:
      "সদস্য হিসেবে সম্প্রদায় আউটরিচ প্রোগ্রামে সক্রিয়ভাবে জড়িত এবং প্রতিষ্ঠানের ইসলামিক শিক্ষা মিশনে অবদানরত।",
    serialNo: 11,
  },
  {
    id: 12,
    name: "Alhaz Kabir Mandol",
    nameBn: "আলহাজ কবির মন্ডল",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Experienced Hafiz serving as Member, actively contributing to Quran education, Hafiz training programs, and community religious activities.",
    descriptionBn:
      "অভিজ্ঞ হাফিজ হিসেবে সদস্য যিনি কুরআন শিক্ষা, হাফিজ প্রশিক্ষণ কর্মসূচি এবং সম্প্রদায়ের ধর্মীয় কার্যক্রমে সক্রিয়ভাবে অবদান রাখছেন।",
    serialNo: 12,
  },
  {
    id: 13,
    name: "Alhaz Abul Kalam",
    nameBn: "আলহাজ আবুল কালাম",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Member representing teaching staff, actively involved in enhancing educational quality and mentoring student academic and spiritual development.",
    descriptionBn:
      "শিক্ষকমণ্ডলীর প্রতিনিধি সদস্য যিনি শিক্ষার মান উন্নয়ন এবং শিক্ষার্থীদের একাডেমিক ও আধ্যাত্মিক বিকাশে সক্রিয়।",
    serialNo: 13,
  },
  {
    id: 14,
    name: "Md. Abdur Rajjak (Raju)",
    nameBn: "মো: আবদুর রাজ্জাক (রাজু)",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Member from teaching staff actively engaged in curriculum development and promoting excellence in Islamic education and community teaching programs.",
    descriptionBn:
      "শিক্ষক দল থেকে আগত সদস্য যিনি পাঠ্যক্রম উন্নয়ন এবং ইসলামিক শিক্ষা ও সম্প্রদায় শিক্ষা প্রোগ্রামে উৎকর্ষতা প্রচারে নিযুক্ত।",
    serialNo: 14,
  },
];

// "শিক্ষক প্রতিনিধি",
