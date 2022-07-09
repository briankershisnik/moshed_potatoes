import { useEffect, useState } from 'react';
import MovieList from './MovieList.js';
import { MovieConsumer } from '../providers/MovieProvider';
import MovieForm from './MovieForm.js';
import { Modal } from 'react-bootstrap';

const Movies = ({movies, getAllMovies, errors, setErrors, addMovie }) => {
    const [adding, setAdd] = useState(false)

  useEffect( () =>{
    getAllMovies()  
  }, [])
  
  return (
    <>
    <p onClick={() => setAdd(true)}>+</p>
    <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <MovieForm 
          addMovie={addMovie} 
          errors={errors} 
          setErrors={setErrors} 
        />
      </Modal.Body>
    </Modal>
    <MovieList 
      movies={movies}
      errors={errors} 
      setErrors={setErrors} 
    />
    
    </>
  )
}

const ConnectedMovies =(props)=>(
  <MovieConsumer>
    { value => <Movies {...props} {...value} />}
</MovieConsumer>

  )
export default ConnectedMovies;