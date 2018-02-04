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
    return (
      <div>

      <ListGroupItem header={businesses.name}>
        <ul className ="flex-container">
        <a href = {businesses.url}>
        <img className = "flex-item" src={businesses.image_url}/>
        </a>
        <div className = "paddingtop">
          <div className = " leftadjust" >{`Rating: ${businesses.rating}`}</div>
          <div className = " leftadjust">{`Price: ${businesses.price}`}</div>
          <div>{`Location: ${businesses.location.address1} ${businesses.location.city}, ${businesses.location.state}`}</div>
         <div className = "leftadjust">{`Distance: ${Math.round((businesses.distance * 0.000621371)*100)/100} Miles`}</div>
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
