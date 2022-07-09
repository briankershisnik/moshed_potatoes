import { useEffect } from 'react';
import MovieList from './MovieList';
import { MovieConsumer } from '../providers/MovieProvider';

const Movies = ( movies, getAllMovies ) => {
  useEffect( () =>{
    getAllMovies()  
  }, [])
  
  return (
    <>

      <MovieList movies={movies} />
    </>
  )
}

export default Movies;