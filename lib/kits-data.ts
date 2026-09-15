export interface KitMedicine {
  number: number;
  name: string;
  formPack: string;
  dosageSummary: string;
  image: string;
}

export interface KitStep {
  stepNumber: number;
  title: string;
  instruction: string;
  note?: string;
}

export interface KitData {
  slug: string;
  name: string;
  tagline: string;
  reassurance: string;
  trustStats: {
    stat1: string;
    stat2: string;
  };
  medicines: KitMedicine[];
  steps: KitStep[];
  precautions: string[];
  supportTitle: string;
  supportCopy: string;
  whatsappNumber: string;
  whatsappMessage: string;
  phoneNumber: string;
}

export const KITS_DATA: Record<string, KitData> = {
  'mens-wellness-kit': {
    slug: 'mens-wellness-kit',
    name: "Men's Wellness Kit",
    tagline: 'Kit Received? Yahan Dekhein Kaise Use Karein',
    reassurance: 'Aapki privacy hamari pehli preference hai — isliye simple & discreet packaging ke saath delivery ki gayi hai.',
    trustStats: {
      stat1: '10,000+ Patients Trusted',
      stat2: '100% Safe & Natural',
    },
    medicines: [
      {
        number: 1,
        name: 'Medicine No. 1',
        formPack: 'Drops · 30ML · Safed Dropper',
        dosageSummary: '12 boondein, subah-shaam',
        image: '/kit-medicine-1.jpg',
      },
      {
        number: 2,
        name: 'Medicine No. 2',
        formPack: 'Drops · 30ML · Pila Dropper',
        dosageSummary: '12 boondein, subah-shaam',
        image: '/kit-medicine-2.jpg',
      },
      {
        number: 3,
        name: 'Medicine No. 3',
        formPack: 'Tablets · 120 Tablets · Sugar Pills',
        dosageSummary: '4 goliyaan, subah-shaam',
        image: '/kit-medicine-3.jpg',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Medicine No. 1 (Safed Dropper)',
        instruction: 'Roz subah khali pet aur shaam ko khane se pehle, 1/4 cup normal paani mein 12 boondein daal kar peeyin.',
      },
      {
        stepNumber: 2,
        title: 'Medicine No. 2 (Pila Dropper)',
        instruction: 'Medicine No. 1 lene ke 1 se 1.5 minute baad, 1/4 cup normal paani mein 12 boondein daal kar peeyin.',
        note: 'Dhyaan rakhein: Step 1 aur Step 2 ke beech 1-1.5 minute ka gap zaroori hai.',
      },
      {
        stepNumber: 3,
        title: 'Medicine No. 3 (Tablets)',
        instruction: '4 goliyaan jeebh par rakh kar choosein (suck karein). Chabayein ya paani se swallow bilkul na karein.',
        note: 'Dawai ki earthy / mithi smell aur taste bilkul normal hai. Dawa lene ke 10 minute baad tak kuch bhi khayein-piyein nahi.',
      },
    ],
    precautions: [
      '10 minute pehle/baad kuch na khayein-piyein',
      'Order follow karein: No. 1 → No. 2 → No. 3',
      'Routine roz subah-shaam repeat karein',
      'Doubt ho toh khud adjust na karein, clinic se contact karein',
    ],
    supportTitle: 'Koi Doubt Hai?',
    supportCopy: 'Agar kit lene ke tarike ya dosage mein koi samajh na aaye, toh hamare HOMMED विशेषज्ञ aapki help ke liye available hain.',
    whatsappNumber: '918707868504',
    whatsappMessage: "Mujhe Men's Wellness Kit ke dosage mein help chahiye",
    phoneNumber: '+918707868504',
  },
};
