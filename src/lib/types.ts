export type Cause = {
  id: string;
  title: string;
  goal: number;
  raised: number;
  imageId: string;
  shortDescription: string;
  fullDescription: string;
  status: 'ongoing' | 'completed';
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  imageId: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
