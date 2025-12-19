
import type { Testimonial, FAQ } from './types';

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
