import React from 'react';
import "../style/NavBar.css";
import {AiOutlineSearch} from "react-icons/ai";
import { VscBellDot} from "react-icons/vsc";
import { IoMdPeople } from "react-icons/io";
import vicky from "../images/vicky.jpg"


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="inner-nav">
        <AiOutlineSearch size={20}/> 
      </div>
      <div className="inner-nav1">
        <IoMdPeople size={18}/>
        <VscBellDot size={18}/>
        <img src={vicky} alt="profile"/>
      </div>
    </div>
  );
}

export default NavBar