import React from "react";
import VideoSection from './videosection/VideoSection'
import  "./Videos.css";

const Videos = (props) => {
 
  return (
      <div id="content-container">
        <div className="header-info"><h2>Recommended</h2></div>
        <VideoSection list={props}/>
      </div>
  );
};

export default Videos;
