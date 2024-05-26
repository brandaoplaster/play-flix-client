export type Genre = {
  type: string;
  id: string;
  name: string;
  isActive: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Genres = Genre[];
