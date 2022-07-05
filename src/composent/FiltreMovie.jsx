import  React from 'react'
import StarRating from './StarRating';
import "./FiltreMovie.css";
const FiltreMovie = ({byname,handlefilterbyname,rating,handleRating,byrating,handlefilterbyrating}) => {
   
  return (
   
        <form>
            <div className='INPUTNAME'>
        <p className='searchby' >search by name</p>
            <input type="text" value={byname} onChange={e=>handlefilterbyname(e.target.value)} />
            </div>
            <div className='INPUTRATING'>
                <p className='searchby' >search by Rating</p>
                <div className='StarRating'>
                <StarRating rating={rating} handleRating={handleRating}
                byrating={byrating} handlefilterbyrating={handlefilterbyrating} />
                </div>
            </div>
        </form>
    
  )
}

export default FiltreMovie