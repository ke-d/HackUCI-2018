import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
const NavBarHeader = (props) => {
  return (
    <Navbar fixedTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
      <Link to="/">React-Bootstrap</Link>

      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          {"My Info"}
        </NavItem>
        <li>
        <Link to="/editmealplan">

            {"Edit Meal Plan"}

        </Link>
        </li>
        <NavItem eventKey={3} href="#">
          {"My Coupons"}
        </NavItem>
        <NavItem eventKey={4} href="#">
          {"Settings"}
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};

export default NavBarHeader;
