import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

const NavBarHeader = (props) => {
  return (
    <Navbar fixedTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
      <Link to="/">Fed Up</Link>

      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li>
        <Link to="/myinfo">

            {"My Info"}

        </Link>
        </li>
        <li>
        <Link to="/editmealplan">

            {"Edit Meal Plan"}

        </Link>
        </li>
        <NavItem eventKey={3} href="#">
          {"My Coupons"}
        </NavItem>
        <li>
        <Link to="/about">

            {"About"}

        </Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};

export default NavBarHeader;
