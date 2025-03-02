
export type Business = {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  website?: string;
  created_at: string;
  updated_at: string;
  image_url?: string;
  rating?: number;
  total_reviews?: number;
};

export type Category = {
  id: string;
  name: string;
  count: number;
};
