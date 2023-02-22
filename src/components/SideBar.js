import React from 'react';
import "../style/SideBar.css";
import {
  BsFillBarChartFill,
  BsFillPeopleFill,
  BsFillHandbagFill,
} from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import {MdAccountCircle} from "react-icons/md"
import { AiFillSetting, AiTwotoneSetting } from "react-icons/ai";
import {IoMdPeople} from "react-icons/io"
import dash from "../images/dash.png"
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="inner-side">
        <img src={dash} alt="dash"/>
      </div>
      <div className="inner-side1">
        <li>
          <BsFillBarChartFill /> Dahboard
        </li>
        <li>
          <BsFillPeopleFill /> Customers
        </li>
        <li><BsFillHandbagFill/> Products</li>
        <li>
          <MdAccountCircle /> Accounts
        </li>
        <li>
          <AiFillSetting /> Settings
        </li>
        <li>
          <FaLock /> Login
        </li>
        <li><IoMdPeople/> Register</li>
        <li><AiTwotoneSetting/> Error</li>
      </div>
    </div>
  );
}

export default SideBar