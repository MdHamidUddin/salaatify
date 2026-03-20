export type TeamMember = {
  id: number;
  name: string;
  nameBn?: string; // Bangla name
  role: string;
  roleBn?: string; // Bangla role
  image: string;
  description?: string;
  descriptionBn?: string; // Bangla description
};

// You can update this file later with your actual team data
export const teamMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Md. Hamid Uddin",
    nameBn: "মোঃ হামিদ উদ্দিন",
    role: "General Member",
    roleBn: "সাধারণ সদস্য",
    image: "/team/hamid.jpeg",
    description:
      "Technology specialist and  lecturer at American International University-Bangladesh",
    descriptionBn:
      "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি-বাংলাদেশের একটি প্রযুক্তি বিশেষজ্ঞ এবং প্রভাষক।",
  },
  {
    id: 2,
    name: "Md. Zunaid Masud",
    nameBn: "মোঃ জুনায়েদ মাসুদ",
    role: "Marketing and Fundraising Lead",
    roleBn: "মার্কেটিং ও তহবিল সংগ্রহের নেতা",
    image: "/team/porosh.jpeg",
    description:
      "Marketing and fundraising expert with a passion for education.",
    descriptionBn:
      "শিক্ষার প্রতি উত্সাহসহ একজন মার্কেটিং ও তহবিল সংগ্রহের বিশেষজ্ঞ।",
  },
];
