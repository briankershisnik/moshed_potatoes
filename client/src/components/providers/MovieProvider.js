import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MovieContext = React.createContext() 

export const MovieConsumer = MovieContext.Consumer;

const MovieProvider = ({ any }) => {
  const [movies, setMovies] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllMovies = () => {
    axios.get('/api/movies')
      .then( res => setMovies(res.data) )
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addMovie = (movie) => {
    axios.post('/api/movies', { movie })
      .then( res => setMovies([...movie, res.data ]))
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const updateMovie = (id, movie) => {
    axios.put(`/api/movies/${id}`, { movie })
      .then( res => {
        const newUpdateMovies = movies.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setMovies(newUpdateMovies)
        navigate('/movies')
      })
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const deleteMovie = (id) => {
    axios.delete(`/api/movie/${id}`)
      .then( res => {
        setMovies(movies.filter( c => c.id !== id ))
        navigate('/movies')
      })
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  return (
    <MovieContext.Provider value={{
      movies, 
      errors, 
      setErrors,
      getAllMovies,
      addMovie,
      updateMovie,
      deleteMovie,
    }}>
      { any }
    </MovieContext.Provider>
  )
}

export default MovieProvider;