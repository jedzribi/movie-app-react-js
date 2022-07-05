import React,{ useState } from 'react';
import Modal from 'react-modal';
import './AddMovie.css'
import StarRating from "./StarRating";

const AddMovie = ({handleAdd}) => {
  const [title, setTitle] = useState("");
  const [minititle, setMinititle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [posteURL, setPosteURL] = useState("");
  const [affiche, setAffiche] = useState("");
  const [rating, setRating] = useState(0); 
  
  
  const handleRating=(x)=>{setRating(x)}
  
  
  const handleSubmit=(e)=>{e.preventDefault()  
    const newMovie={id:Math.random(),title,minititle,genre,description,posteURL,rating,affiche}
    handleAdd(newMovie)
    closeModal()
  }

  const customStyles = { 
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display:'block',
    },
  };
  
  
  Modal.setAppElement('#root');
  
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  
  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

    return (
    <div >
      <button className='NewMovie' onClick={openModal}><p className='ADD'>Add Movie</p></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
          <div style={{height:"250px",width:"500px"}}>
            <form onSubmit={handleSubmit}>
          <div style={{display:"block"}}>
              <div style={{display:"flex"}}>
            <div style={{display:"block"}}> 
            <div><label>Movie title</label></div>
            <div><input className='A' type="text" value={title} onChange={e=>setTitle(e.target.value)}/></div>
            </div>
            <div style={{display:"block"}}> 
            <div><label>Movie minititle</label></div>
            <div><input className='A' type="text" value={minititle} onChange={e=>setMinititle(e.target.value)}/></div>
            </div>
            <div style={{display:"block"}}> 
              <div><label>Movie genre</label></div>
              <div><input  className='A' type="text" value={genre} onChange={e=>setGenre(e.target.value)}/></div>
              </div></div> 
              <div style={{display:"flex"}}>
            <div style={{display:"block"}}>
              <div><label>Movie description</label></div>
              <div><input type="text" value={description} onChange={e=>setDescription(e.target.value)}/></div>
            </div>
            <div style={{display:"block"}}>
              <div><label>Movie posteURL</label></div>
              <div><input type="text" value={posteURL} onChange={e=>setPosteURL(e.target.value)}/></div></div>
            <div><div style={{display:"block"}}>
            <label>Movie poster</label></div>
            <div><input type="text"value={affiche} onChange={e=>setAffiche(e.target.value)}/></div></div>
              </div>
            <StarRating rating={rating} handleRating={handleRating}/>
            <div> 
              <button className='BTNADD' >Add</button>
              <button className='BTNCANCEL' onClick={closeModal}>Cancel</button>
            </div></div>
            </form></div>
        </Modal>
    </div>
  )
}

export default AddMovie