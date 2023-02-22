import React from 'react';
import "../style/Home.css";
import {
  AiFillDollarCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import {GiProgression} from "react-icons/gi"

const Home = () => {
  return (
    <div className="home">
      <div className="inner-home">
        <div className="inner-content">
          <div className="budget">
            <div>
              <p>BUDGET</p>
              <h2>$24K</h2>
            </div>
            <div className="icon">
              <AiFillDollarCircle />
            </div>
          </div>
          <div className="per">
            <AiOutlineArrowDown /> 12%
            <p>since last month</p>
          </div>
        </div>

        <div className="inner-content">
          <div className="budget">
            <div>
              <p>TOTAL CUSTOMERS</p>
              <h2>1,6K</h2>
            </div>
            <div className="icon1">
              <MdAccountCircle />
            </div>
          </div>
          <div className="per2">
            <AiOutlineArrowUp /> 16%
            <p>since last month</p>
          </div>
        </div>
        <div className="inner-content">
          <div className="budget">
            <div>
              <p>TASKS PROGRESS</p>
              <h2>75.5%</h2>
            </div>
            <div className="icon2">
              <GiProgression />
            </div>
          </div>
          <div className="bar"></div>
        </div>
        <div className="inner-content">
          <div className="budget">
            <div>
              <p>TOTAL PROFIT</p>
              <h2>$23K</h2>
            </div>
            <div className="icon3">
              <AiFillDollarCircle />
            </div>
          </div>
          <div className="per"></div>
        </div>
      </div>
      <div className="inner-home1">
        <div className="chart"></div>
        <div className="traffic"></div>
      </div>
    </div>
  );
}

export default Home