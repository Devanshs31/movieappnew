import React from 'react'
import '../css/Favourites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Favourites = () => {

  const { favorites } = useMovieContext();
  if(favorites){
    return (
        <div className='favorites'>
            <h2>Your Favourites Movies</h2>
            <div className='movies-grid'>
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
        </div>
          )
  }

  return (
    <div className='favorites-empty'>
      <h2>No Favourites Movies yet...</h2>
      <p>Start adding your movies</p>
    </div>
  )
}

export default Favourites
