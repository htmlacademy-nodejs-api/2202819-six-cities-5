import {User} from './user.type.js';
import {Location} from './location.type.js';
import {Goods} from './goods.enum.js';
import {CityName} from './city-name.enum.js';
import {HouseType} from './house-type.enum.js';

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
  type: HouseType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Goods[];
  user: User;
  location: Location;
};
