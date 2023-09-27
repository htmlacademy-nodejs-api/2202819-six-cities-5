import {CityName, User, Location} from '../types/index.js';

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: CityName;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  user: User;
  location: Location;
};
