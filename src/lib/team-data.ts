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
    name: "Md. Mizanur Rahman",
    nameBn: "মো: মিজানুর রহমান",
    role: "President",
    roleBn: "সভাপতি",
    image: "/teachers/teacher1.jpg",
    description:
      "Leading the organization with dedication and vision for Islamic education and community development.",
    descriptionBn:
      "ইসলামিক শিক্ষা ও সম্প্রদায় উন্নয়নের জন্য নিষ্ঠা ও দূরদর্শিতার সাথে প্রতিষ্ঠানটি পরিচালনা করছেন।",
    serialNo: 1,
  },
  {
    id: 2,
    name: "Md. Rejwanul Karim",
    nameBn: "মো: রেজওয়ানুল করিম",
    role: "Secretary",
    roleBn: "সেক্রেটারি",
    image: "/teachers/teacher1.jpg",
    description:
      "Managing administrative affairs and ensuring smooth operation of all organizational activities.",
    descriptionBn:
      "প্রশাসনিক বিষয়াবলী পরিচালনা এবং সকল সাংগঠনিক কার্যক্রমের সুষ্ঠু পরিচালনা নিশ্চিত করছেন।",
    serialNo: 2,
  },
  {
    id: 4,
    name: "Md. Shafiqul Islam Bablu",
    nameBn: "মো: শাফিকুল ইসলাম বাবলু",
    role: "Cashier",
    roleBn: "ক্যাশিয়ার",
    image: "/teachers/teacher1.jpg",
    description:
      "Responsible for financial management and maintaining transparent accounting records.",
    descriptionBn:
      "আর্থিক ব্যবস্থাপনা এবং স্বচ্ছ হিসাব রেকর্ড রক্ষণাবেক্ষণের দায়িত্বে রয়েছেন।",
    serialNo: 5,
  },
  {
    id: 5,
    name: "Md. Kabir Member",
    nameBn: "মো: কবির মেম্বার",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Dedicated to supporting the organization's mission and community outreach programs.",
    descriptionBn:
      "প্রতিষ্ঠানের লক্ষ্য ও সম্প্রদায়ের আউটরিচ প্রোগ্রাম সমর্থনে নিবেদিত।",
    serialNo: 6,
  },
  {
    id: 6,
    name: "Alhaz Kabir Mandol",
    nameBn: "আলহাজ কবির মন্ডল",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Experienced Hafiz contributing to Quran education and memorization programs.",
    descriptionBn:
      "অভিজ্ঞ হাফিজ হিসেবে কুরআন শিক্ষা ও মুখস্থ প্রোগ্রামে অবদান রাখছেন।",
    serialNo: 7,
  },
  {
    id: 7,
    name: "Alhaz Abul Kalam",
    nameBn: "আলহাজ আবুল কালাম",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Representing the teaching staff and contributing to educational quality improvement.",
    descriptionBn:
      "শিক্ষকমণ্ডলীর প্রতিনিধিত্ব করছেন এবং শিক্ষার মান উন্নয়নে অবদান রাখছেন।",
    serialNo: 9,
  },
  {
    id: 8,
    name: "Qari Aminul Ahad",
    nameBn: "ক্বারি আমিনুল আহাদ",
    role: "Teacher",
    roleBn: "শিক্ষক",
    image: "/teachers/teacher1.jpg",
    description:
      "Dedicated teacher focused on Quranic education and Islamic studies.",
    descriptionBn: "কুরআন শিক্ষা ও ইসলামিক অধ্যয়নে নিবেদিত শিক্ষক।",
    serialNo: 10,
  },
  {
    id: 9,
    name: "Hafez Tareq Jamil",
    nameBn: "হাফেজ তারেক জামিল",
    role: "Member",
    roleBn: "শিক্ষক",
    image: "/teachers/teacher1.jpg",
    description:
      "Active member supporting various organizational initiatives and community services.",
    descriptionBn:
      "বিভিন্ন সাংগঠনিক উদ্যোগ এবং কমিউনিটি সেবা সমর্থনে সক্রিয় সদস্য।",
    serialNo: 11,
  },
  {
    id: 7,
    name: "Md. Abdur Rajjak (Raju)",
    nameBn: "মো: আবদুর রাজ্জাক (রাজু)",
    role: "Member",
    roleBn: "সদস্য",
    image: "/teachers/teacher1.jpg",
    description:
      "Representing the teaching staff and contributing to educational quality improvement.",
    descriptionBn:
      "শিক্ষকমণ্ডলীর প্রতিনিধিত্ব করছেন এবং শিক্ষার মান উন্নয়নে অবদান রাখছেন।",
    serialNo: 9,
  },
];

// "শিক্ষক প্রতিনিধি",
