import {User} from './user.type.js';

export type Review = {
  comment: string;
  date: Date;
  rating: number;
  user: User;
};
