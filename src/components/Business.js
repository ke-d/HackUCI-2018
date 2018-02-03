import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Business = (props) => {
  const {businesses} = props;
  return (
    <ListGroupItem header={businesses.name}>Some body text</ListGroupItem>
  )
}

export default Business;


