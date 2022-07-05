import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
    // console.log(data)
  return (
    <div style={{display:"flex"}}>
      
      {React.Children.toArray(data.map(movie=><MovieCard item={movie} />))}
    </div>
  )
}

export default MovieList