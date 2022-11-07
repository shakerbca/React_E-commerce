import React from 'react'
import css from './Virtual-module.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from "react-compare-image";
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual = () => {
  return (
   <div className="Virtual">
    <div className="left_l">
      <span>Virtual Try-On</span>
      <span>Never Buy the wrong Shade Again</span>
      <span>Try Now!</span>
      <img src={Shade} alt="" />
    </div>

    <div className="right_r">
      <div className="wrapper_v">
      <ReactCompareImage leftImage={Before} rightImage={After} />
      </div>
    </div>
   </div>
  );
};

export default Virtual;
