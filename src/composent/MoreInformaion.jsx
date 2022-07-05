import React from 'react'
import { Link, useParams } from 'react-router-dom';

const MoreInformaion = ({data}) => {
    const {id}=useParams();

    const TheMovie=data.find(el=>el.id == id) 
    console.log(data)
  return (
    <div>
        <Link to="/"> <button>Home</button> </Link>
        <h1>{TheMovie.title}</h1>
    </div>
  )
}

export default MoreInformaion