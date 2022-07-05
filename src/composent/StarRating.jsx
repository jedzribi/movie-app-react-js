import React from 'react';


const StarRating = ({rating,handleRating}) => {
    const stars=(rating)=>{
      let tab=[]
    for(let i=1;i<=5 ;i++){
        if(i<=rating){
          
tab.push(<span onClick={()=>handleRating(i)} style={{color:"gold",fontSize:"50px",cursor:"pointer"}}>★</span> )}
            else 
{tab.push(<span onClick={()=>handleRating(i)} style={{fontSize:"50px", color:"rgba(255,215,0,0.5)",cursor:"pointer"}}>☆</span>)}
          } return tab
    }
  return (
    <div style={{textAlign:"center"}}>{React.Children.toArray(stars(rating))}</div>
  )
}
StarRating.defaultProps={handleRating:()=>{}}
export default StarRating