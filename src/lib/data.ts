
import type { Cause, Testimonial, FAQ } from './types';

export const causes: Cause[] = [
  {
    id: 'build-a-mosque',
    title: 'Build a Community Mosque',
    goal: 250000,
    raised: 75000,
    imageId: 'cause-mosque',
    shortDescription: 'Contribute to building a sacred space for prayer and community.',
    fullDescription: `A mosque is the heart of a Muslim community. This project aims to construct a beautiful mosque that will serve as a center for daily prayers, Quranic education, and community events. Your contribution will help purchase land and materials, creating a legacy of faith and unity (Sadaqah Jariyah).`,
  },
  {
    id: 'feed-the-needy',
    title: 'Feed Widows & Orphans',
    goal: 50000,
    raised: 22000,
    imageId: 'cause-widows-orphans',
    shortDescription: 'Provide nutritious food parcels to vulnerable widows and orphans.',
    fullDescription: `The Prophet (PBUH) said, "The one who cares for an orphan and myself will be together in Paradise like this," and he held his two fingers together. This program provides essential food parcels to widows and orphaned children, ensuring they have access to nutritious meals and the support they need to thrive. Your donation offers them comfort and security.`,
  },
  {
    id: 'ramadan-food-drive',
    title: 'Ramadan Food Drive',
    goal: 100000,
    raised: 85000,
    imageId: 'cause-ramadan',
    shortDescription: 'Help families in need observe Ramadan with dignity and joy.',
    fullDescription: `Ramadan is a time of spiritual reflection and compassion. Our Ramadan Food Drive aims to provide families with food packs for Suhoor and Iftar throughout the blessed month. Each pack contains staples like dates, rice, flour, and oil, enabling them to fast without worrying about their next meal. Share the blessings of Ramadan with those in need.`,
  },
  {
    id: 'scholars-fund',
    title: "Scholar's Fund: Supporting Muslim Students",
    goal: 75000,
    raised: 32000,
    imageId: 'cause-education',
    shortDescription: 'Pay school fees for bright but needy Muslim students.',
    fullDescription: `"Seeking knowledge is an obligation upon every Muslim." (Hadith) This fund directly covers the school fees for promising Muslim students facing financial hardship, removing barriers to education. Your donation empowers the next generation of the Ummah to build a brighter future, embodying the spirit of "Iqra" (Read).`,
  },
  {
    id: 'ummah-empowerment-grants',
    title: 'Ummah Empowerment Grants',
    goal: 80000,
    raised: 25000,
    imageId: 'cause-livelihood',
    shortDescription: 'Provide startup grants for aspiring Muslim entrepreneurs.',
    fullDescription: `Islam encourages self-reliance and halal enterprise. These empowerment grants provide seed funding for aspiring Muslim entrepreneurs to launch small businesses. By investing in their ventures, you help create sustainable livelihoods, foster economic independence, and strengthen the entire community.`,
  },
  {
    id: 'laptops-for-techies',
    title: 'Laptops for Muslim Techies',
    goal: 60000,
    raised: 15000,
    imageId: 'cause-tech',
    shortDescription: 'Equip aspiring Muslim developers and designers with laptops.',
    fullDescription: `In the digital age, technology is a gateway to opportunity. This program provides laptops to talented young Muslims pursuing careers in tech, from software development to digital design. Your donation equips them with the essential tool they need to learn, innovate, and secure a prosperous future in the tech industry.`,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ibrahim Adebayo',
    location: 'Rural Village',
    quote: 'The new well has changed everything. Our children are healthier, and my daughters can go to school instead of fetching water all day. It is a true blessing.',
    imageId: 'testimonial-1',
  },
  {
    id: '2',
    name: 'Aisha Bello',
    location: 'Displaced Persons Camp',
    quote: 'When we lost everything, Barakah Oasis gave us not just food, but hope. The support we received gave us the strength to keep going.',
    imageId: 'testimonial-2',
  },
  {
    id: '3',
    name: 'Fatima Lawal',
    location: 'Urban Slum',
    quote: 'Learning to sew has given me a way to provide for my family with dignity. I am grateful for the opportunity to build my own future.',
    imageId: 'testimonial-3',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How much of my donation goes to the cause?',
    answer: 'We are committed to transparency. 90% of every donation goes directly to the project you choose to support. The remaining 10% covers essential administrative costs to ensure our operations are efficient and effective.',
  },
  {
    id: 'faq-2',
    question: 'Can I volunteer with Barakah Oasis?',
    answer: 'Yes! We have various volunteer opportunities, both locally and internationally. Please visit our "Get Involved" page or contact us for more information on how you can contribute your time and skills.',
  },
  {
    id: 'faq-3',
    question: 'Is my donation tax-deductible?',
    answer: 'Barakah Oasis is a registered non-profit organization. All donations are handled in accordance with local regulations. You will receive a receipt for your donation via email for your records.',
  },
  {
    id: 'faq-4',
    question: 'How do you select the projects and communities you support?',
    answer: 'Our projects are selected based on extensive needs assessments conducted by our field teams and in collaboration with local community leaders. We prioritize areas with the most critical needs and where our intervention can have a sustainable, long-term impact.',
  },
];
