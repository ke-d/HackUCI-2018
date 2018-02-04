import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Business = (props) => {
  const {businesses, index} = props;
  return (
    <div>
    
    <span>{index+1}</span>  
    
    <ListGroupItem header={businesses.name}>
      <ul className ="flex-container">
      <a href = {businesses.url}>
      <img className = "flex-item" src={businesses.image_url}/>
      </a>
      <div className = "paddingtop">
        <div className = " leftadjust" >{`Rating: ${businesses.rating}`}</div>
        <div className = " leftadjust">{`Price: ${businesses.price}`}</div>
        <div>{`Location: ${businesses.location.address1} ${businesses.location.city}, ${businesses.location.state}`}</div>
        <div className = "leftadjust">{`Distance: ${Math.round(businesses.distance * 3.28084)} Feet`}</div>
        <img className = "leftadjust im favoritemargin "src={`https://image.flaticon.com/icons/png/128/126/126471.png`}/>
      </div>
      </ul>
    
    </ListGroupItem>
    </div>
  )
}

export default Business;



//rating
//$$
//Favorites
//Pic of item from menu
//<div className = "leftadjust">{`Phone #: ${businesses.phone}`}</div>