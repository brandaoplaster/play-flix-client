import Image from 'next/image';
import { Movie, Movies } from '../types/Movie';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

export const MovieCard = ({ movie }: { movie: Movie }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]'>
    <Image
      src={movie.bannerFileURL}
      alt={movie.title}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
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
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
