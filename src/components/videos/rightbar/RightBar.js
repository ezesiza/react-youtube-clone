import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "./RightBar.css";

const RightBar = (props) => {
  const history = useHistory();

  const handleVideoClick = (_videoId) => {
    history.push({pathname:`/watch/${_videoId}`, state:props.list});
  };

  return (
    <section className="video-section">
    {props.list.map((item) => (
      <div className="videos" key={item.etag}>
        <div className="thumbnail" onClick={e =>{ e.preventDefault(); return handleVideoClick(item.id.videoId)}}>
          <img src={item && item.snippet?.thumbnails.high?.url} alt="thumb1" />
        </div>
        <div className="info">
          <div className="user-thumb">
            <img src={item&& item.snippet?.thumbnails.high?.url} alt="up1" />
          </div>
          <div className="title">
            <h2 className="main-text">{item.snippet?.title}</h2>
            <p className="sub-text">
              {item.snippet?.channelTitle}
              <i className="fas fa-music"></i>
            </p>
            <p className="sub-text">
              {item.statistics?.viewCount}{" "}
              {moment(item && item.snippet?.publishedAt).fromNow()}
            </p>
          </div>
          <div className="hover-icon">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    ))}
  </section>
   
  );
};

export default RightBar;
