import type { Cause, Testimonial, FAQ } from './types';

export const causes: Cause[] = [
  {
    id: 'clean-water-initiative',
    title: 'Clean Water Initiative',
    goal: 50000,
    raised: 27500,
    imageId: 'cause-water',
    shortDescription: 'Bringing clean and safe drinking water to remote villages.',
    fullDescription: `Water is life, yet millions suffer from waterborne diseases. The Clean Water Initiative is a comprehensive project aimed at transforming communities by providing access to safe, clean drinking water. Our strategy involves drilling deep-water wells, installing hand pumps, and establishing water purification systems in areas where surface water is contaminated. We also conduct hygiene and sanitation workshops to educate community members on best practices, ensuring the long-term health benefits of our intervention. By supporting this cause, you help reduce disease, improve child health, and empower women and girls who spend hours daily fetching water. A new well can serve an entire village, unlocking potential and paving the way for a healthier, more productive future.`,
  },
  {
    id: 'education-for-all',
    title: 'Education for All',
    goal: 75000,
    raised: 32000,
    imageId: 'cause-education',
    shortDescription: 'Providing books, supplies, and safe learning spaces for children.',
    fullDescription: `Education is the key to breaking the cycle of poverty. The 'Education for All' program focuses on removing barriers to learning for children in underserved regions. We build and renovate schools to create safe, conducive learning environments. We provide essential supplies such as textbooks, notebooks, and writing materials. Furthermore, we support teacher training programs to improve the quality of education and offer scholarships to promising students who cannot afford to continue their studies. Your donation can give a child the tools they need to build a better future for themselves and their community. An educated child is more likely to be healthier, earn a higher income, and contribute positively to society.`,
  },
  {
    id: 'emergency-food-relief',
    title: 'Emergency Food Relief',
    goal: 100000,
    raised: 85000,
    imageId: 'cause-food',
    shortDescription: 'Delivering nutritious food parcels to families facing hunger.',
    fullDescription: `In times of crisis, hunger is often the most immediate threat. Our Emergency Food Relief program is a rapid-response initiative to deliver life-saving food to families affected by natural disasters, conflict, or economic collapse. Each food parcel is carefully designed to provide a family with essential nutrition for a month, including staples like rice, flour, lentils, oil, and fortified supplements for children. We work with local partners to ensure swift and efficient distribution to those who need it most. Your support can provide immediate relief from hunger, prevent malnutrition, and give families the strength to rebuild their lives in the face of adversity.`,
  },
  {
    id: 'safe-shelter-project',
    title: 'Safe Shelter Project',
    goal: 120000,
    raised: 45000,
    imageId: 'cause-shelter',
    shortDescription: 'Building durable shelters for families displaced by disaster.',
    fullDescription: `A home is more than just a roof over one's head; it is a place of safety, dignity, and hope. The Safe Shelter Project provides durable, weather-resistant shelters for families who have lost their homes to disasters like earthquakes, floods, or conflict. We use locally sourced materials and labor to construct homes that are not only safe but also culturally appropriate. The project also includes training for community members in construction techniques, empowering them with new skills. By giving a family a safe place to live, you are restoring their sense of security and providing a foundation upon which they can rebuild their lives and communities.`,
  },
  {
    id: 'mobile-health-clinics',
    title: 'Mobile Health Clinics',
    goal: 60000,
    raised: 55000,
    imageId: 'cause-medical',
    shortDescription: 'Bringing essential medical care to isolated communities.',
    fullDescription: `Access to healthcare is a fundamental human right, but for many in remote areas, it remains a distant dream. Our Mobile Health Clinics travel to isolated villages, bringing doctors, nurses, and medical supplies directly to the people. These clinics provide a range of services, including primary care consultations, maternal and child health services, vaccinations, and treatment for common illnesses. They play a crucial role in early diagnosis and prevention, saving lives and reducing the burden of disease. Your donation helps us fuel our vehicles, stock our clinics with medicine, and pay our medical staff, ensuring that even the most remote communities receive the quality healthcare they deserve.`,
  },
  {
    id: 'sustainable-livelihoods',
    title: 'Sustainable Livelihoods',
    goal: 80000,
    raised: 25000,
    imageId: 'cause-livelihood',
    shortDescription: 'Empowering individuals with skills and resources to earn a living.',
    fullDescription: `Charity is not just about giving aid; it's about giving opportunity. The Sustainable Livelihoods program empowers individuals to become self-sufficient by providing them with the skills and resources they need to earn a stable income. We offer vocational training in fields like tailoring, carpentry, and agriculture, as well as providing small business grants and mentorship. By equipping people with the means to support themselves and their families, we foster independence, boost local economies, and create lasting change. Your support can fund a training course or provide the startup capital for a small enterprise, transforming a life from dependency to dignity.`,
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
