export interface Testimonial {
  _id?: string;
  name: string;
  position?: string;
  company?: string;
  content: string;
  rating?: number;
  image?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}