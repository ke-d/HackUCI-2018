import React, { Component } from 'react';

const Business = (props) => {
  const {businesses} = props;
  return (
    <p>{businesses.name}</p>
  )
}

export default Business;
