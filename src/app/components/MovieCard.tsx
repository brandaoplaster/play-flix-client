import { MovieCardInfo } from './MovieInfo';
import { MovieCardProps } from '@/app/components/MovieRow';
import Image from 'next/image';

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw] '>
    <Image
      src={movie.bannerFileURL}
      alt={movie.title}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    />
    <MovieCardInfo
      id={movie.id}
      title={movie.title}
      genres={movie.genres}
      rating={movie.rating}
      bannerFileURL={movie.bannerFileURL}
    />
  </div>
);
