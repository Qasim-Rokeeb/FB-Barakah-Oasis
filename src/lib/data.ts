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
    id: 'clean-water-initiative',
    title: 'Clean Water Initiative',
    goal: 50000,
    raised: 27500,
    imageId: 'cause-water',
    shortDescription: 'Bringing clean and safe drinking water to remote villages.',
    fullDescription: `Water is life, yet millions suffer from waterborne diseases. The Clean Water Initiative is a comprehensive project aimed at transforming communities by providing access to safe, clean drinking water. Our strategy involves drilling deep-water wells, installing hand pumps, and establishing water purification systems in areas where surface water is contaminated. By supporting this cause, you help reduce disease, improve child health, and empower women and girls who spend hours daily fetching water.`,
  },
  {
    id: 'education-for-all',
    title: 'Education for All',
    goal: 75000,
    raised: 32000,
    imageId: 'cause-education',
    shortDescription: 'Providing books, supplies, and safe learning spaces for children.',
    fullDescription: `Education is the key to breaking the cycle of poverty. The 'Education for All' program focuses on removing barriers to learning for children in underserved regions. We provide essential supplies such as textbooks, notebooks, and writing materials, support teacher training programs, and offer scholarships to promising students who cannot afford to continue their studies. Your donation can give a child the tools they need to build a better future.`,
  },
  {
    id: 'sustainable-livelihoods',
    title: 'Sustainable Livelihoods',
    goal: 80000,
    raised: 25000,
    imageId: 'cause-livelihood',
    shortDescription: 'Empowering individuals with skills and resources to earn a living.',
    fullDescription: `Charity is not just about giving aid; it's about giving opportunity. The Sustainable Livelihoods program empowers individuals to become self-sufficient by providing them with the skills and resources they need to earn a stable income. We offer vocational training in fields like tailoring, carpentry, and agriculture, as well as providing small business grants and mentorship. Your support can fund a training course or provide the startup capital for a small enterprise, transforming a life from dependency to dignity.`,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Abdulrahman Sadiq',
    location: 'Rural Village',
    quote: 'The new well has changed everything. Our children are healthier, and my daughters can go to school instead of fetching water all day. It is a true blessing.',
    imageId: 'testimonial-1',
  },
  {
    id: '2',
    name: 'Hadiza Aliyu',
    location: 'Displaced Persons Camp',
    quote: 'When we lost everything, Barakah Oasis gave us not just food, but hope. The support we received gave us the strength to keep going.',
    imageId: 'testimonial-2',
  },
  {
    id: '3',
    name: 'Zainab Ibrahim',
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
    answer: 'Barakah Oasis is a registered 501(c)(3) non-profit organization. All donations made within the United States are tax-deductible to the extent permitted by law. You will receive a receipt for your donation via email.',
  },
  {
    id: 'faq-4',
    question: 'How do you select the projects and communities you support?',
    answer: 'Our projects are selected based on extensive needs assessments conducted by our field teams and in collaboration with local community leaders. We prioritize areas with the most critical needs and where our intervention can have a sustainable, long-term impact.',
  },
];
