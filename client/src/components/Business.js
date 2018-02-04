import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Heart from "../img/heart.png";
import RedHeart from "../img/heart_red.png";
class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    }
  }

  toggleFavorite() {
    this.setState({favorite: !this.state.favorite});
  }
  render() {
    const {businesses, index} = this.props;
    console.log(this.state.favorite);
    return (
      <div>
      <h1 classname = "midadjust"> Places Near You </h1>
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
          <img onClick={() => this.toggleFavorite()} className = "favoriteimage favoritemargin canClick" src={this.state.favorite ? RedHeart : Heart}/>
        </div>
        </ul>

      </ListGroupItem>
      </div>
    )
  }
}

export default Business;



//rating
//$$
//Favorites
//Pic of item from menu
//<div className = "leftadjust">{`Phone #: ${businesses.phone}`}</div>
