import { Genre } from './Genre';
import { Rating } from './Rating';

export type Movie = {
  id: string;
  title: string;
  description: string;
  yearLaunched: number;
  opened: boolean;
  duration: number;
  categories: string[];
  castMembers: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  bannerHalfFileURL: string;
  trailerFileURL: string;
  videoFileURL: string;
  createdAt: Date;
  updatedAt: Date;
  genres: Genre[];
  rating: Rating;
};

export type Movies = Movie[];
