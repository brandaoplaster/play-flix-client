import { Banner } from '@/app/components/Banner';
import { MovieRow } from '@/app/components/MovieRow';
import { getFeaturedMovies, getMoviesByGenre } from './services/MovieService';
import Header from './components/Header';

async function Home() {
  const featuredMovie = await getFeaturedMovies('106');

  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];

  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:pl-16 '>
        <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
