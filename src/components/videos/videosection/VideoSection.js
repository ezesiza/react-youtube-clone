import React from "react";
import { useHistory } from 'react-router-dom'
import moment from "moment";
import './VideoSection.css';

const VideoSection = React.memo((props) => {
  const history = useHistory();

  const { list } = props.list;

  const handleVideoClick = (_videoId) => {
     history.push({pathname:`/watch/${_videoId}`, state:list});
  };

  return (
    <section className="video-section">
      {list && list.map((item) => (
        <div className="videos" key={item.etag}>
          <div className="thumbnail" onClick={e =>{ e.preventDefault(); return handleVideoClick(item.id)}}>
            <img src={item.snippet.thumbnails.high.url} alt="thumb1" />
          </div>
          <div className="info">
            <div className="user-thumb">
              <img src={item.snippet.thumbnails.high.url} alt="up1" />
            </div>
            <div className="title">
              <h2 className="main-text">{item.snippet.title}</h2>
              <p className="sub-text">
                {item.snippet.channelTitle}
                <i className="fas fa-music"></i>
              </p>
              <p className="sub-text">
                {item?.statistics?.viewCount}{" "} <i className="far fa-eye"></i>{" "}
                 {moment(item && item.snippet.publishedAt).fromNow()} 
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
});

export default VideoSection;
