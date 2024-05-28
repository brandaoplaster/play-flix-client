import { Banner } from '@/app/components/Banner';
import { MovieRow } from '@/app/components/MovieRow';
import { getFeaturedMovies } from './services/MovieService';
import Header from './components/Header';

async function Home() {
  const featuredMovie = await getFeaturedMovies('106');

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:pl-16 '>
        <Banner movie={featuredMovie} />
        <MovieRow sectionTitle='Trending Now' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Action Movies' />
      </main>
    </div>
  );
}

export default Home;
