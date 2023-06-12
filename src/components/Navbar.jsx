import React from "react"
import reactLogo from '../assets/react.svg'
import { NavLink } from "react-router-dom"
import styled from "styled-components";

const linkStyle ={
    textDecoration: "none",
    color : "black",
    paddingLeft: "20px"
}

const NavbarStyling = styled.ul`
  .logo{
    width: 200px;
    max-height: 100px;
  }
  
  .Nav, nav > a{
    display: flex;
    font-size: 30px;
    text-decoration: none;
    align-items: center;
    padding: 20px;
  }
  a{
    text-decoration: "none",
    color : "black",
    padding-left: "20px"
  }
`;

export default function Navbar(){
    return(
        <NavbarStyling>
            <NavLink to={"/"}><img src={reactLogo} className="logo"/></NavLink>
            <NavLink 
                to={"/recipes"} style={linkStyle}>Recipes
            </NavLink>
            <NavLink 
                to={"/products"} style={linkStyle}>Products
            </NavLink>
        </NavbarStyling>
    )}