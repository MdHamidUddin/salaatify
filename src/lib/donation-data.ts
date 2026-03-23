export type PaymentMethod = {
  id: string;
  name: string;
  nameBn: string;
  type: "bkash" | "nagad" | "bank";
  icon: string;
  details: BkashDetails | NagadDetails | BankDetails;
};

export interface BkashDetails {
  merchantNumber: string;
  qrCodeUrl: string;
  instructions: string;
  instructionsBn: string;
}

export interface NagadDetails {
  merchantNumber: string;
  qrCodeUrl: string;
  instructions: string;
  instructionsBn: string;
}

export interface BankDetails {
  bankName: string;
  bankNameBn: string;
  accountName: string;
  accountNameBn: string;
  accountNumber: string;
  branch: string;
  branchBn: string;
  routingNumber?: string;
  swiftCode?: string;
}

export const donationData = {
  title: "Support Our Madrasa",
  titleBn: "আমাদের মাদ্রাসা সহায়তা করুন",
  description:
    "Your donations help us provide quality Islamic education, food, and shelter to our students. Every contribution makes a difference.",
  descriptionBn:
    "আপনার দান আমাদের শিক্ষার্থীদের মানসম্মত ইসলামিক শিক্ষা, খাবার এবং আশ্রয় প্রদানে সহায়তা করে। প্রতিটি অবদান পরিবর্তন আনে।",

  paymentMethods: [
    {
      id: "bkash",
      name: "bKash",
      nameBn: "বিকাশ",
      type: "bkash",
      icon: "/icons/bkash.svg",
      details: {
        merchantNumber: "01716742229",
        qrCodeUrl: "/images/qr/bkash-qr.png",
        instructions:
          "1. Open bKash app\n2. Select 'Send Money'\n3. Enter merchant number: 01716742229\n4. Enter amount\n5. Enter reference: 'Madrasa Donation'\n6. Complete payment",
        instructionsBn:
          "১. বিকাশ অ্যাপ খুলুন\n২. 'সেন্ড মানি' নির্বাচন করুন\n৩. মার্চেন্ট নম্বর লিখুন: 01716742229\n৪. টাকার পরিমাণ লিখুন\n৫. রেফারেন্স লিখুন: 'মাদ্রাসা দান'\n৬. পেমেন্ট সম্পন্ন করুন",
      },
    },
    {
      id: "nagad",
      name: "Nagad",
      nameBn: "নগদ",
      type: "nagad",
      icon: "/icons/nagad.svg",
      details: {
        merchantNumber: "01716742229",
        qrCodeUrl: "/images/qr/nagad-qr.png",
        instructions:
          "1. Open Nagad app\n2. Select 'Send Money'\n3. Enter merchant number: 01716742229\n4. Enter amount\n5. Enter reference: 'Madrasa Donation'\n6. Complete payment",
        instructionsBn:
          "১. নগদ অ্যাপ খুলুন\n২. 'সেন্ড মানি' নির্বাচন করুন\n৩. মার্চেন্ট নম্বর লিখুন: 01716742229\n৪. টাকার পরিমাণ লিখুন\n৫. রেফারেন্স লিখুন: 'মাদ্রাসা দান'\n৬. পেমেন্ট সম্পন্ন করুন",
      },
    },
    {
      id: "bank",
      name: "Bank Account",
      nameBn: "ব্যাংক অ্যাকাউন্ট",
      type: "bank",
      icon: "/icons/bank.svg",
      details: {
        bankName: "Islami Bank Bangladesh Limited",
        bankNameBn: "ইসলামী ব্যাংক বাংলাদেশ লিমিটেড",
        accountName: "An Nur Jame Masjid & Madrasa",
        accountNameBn: "আন-নূর জামে মসজিদ ও মাদ্রাসা",
        accountNumber: "2050XXXXXXXXXX",
        branch: "Shibganj Branch, Chapainawabganj",
        branchBn: "শিবগঞ্জ শাখা, চাঁপাইনবাবগঞ্জ",
        routingNumber: "205XXXXXX",
      },
    },
  ] as PaymentMethod[],
};
