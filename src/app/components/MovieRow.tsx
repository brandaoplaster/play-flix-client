import Image from 'next/image';
import { Movies } from '../types/Movie';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

type MovieCardProps = {
  index: number;
};

export const MovieCard = ({ index }: MovieCardProps) => (
  <div
    className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent
                to-black transition duration-200 ease-in hover:z-50 hover:scale-110
                md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]
              '
  >
    <Image
      src={`/item_${index}.png`}
      alt='image'
      width={600}
      height={400}
      className='rounded'
    />
  </div>
);

export function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} index={index} />
        ))}
      </div>
    </div>
  );
}
