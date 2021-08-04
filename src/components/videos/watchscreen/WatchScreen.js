import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightBar from "../rightbar/RightBar";
import { useLocation } from "react-router-dom";
import request from "./../../../services/services";
import "./WatchScreen.css";

const KEY = "AIzaSyChUNNAhY5K0K2JmR_GqH6ggHsueimPLEg";

const WatchScreen = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const [recommended, setRecommended] = useState([]);

  const [snippet] = state.filter((item) => item.id === id);

  useEffect(() => {
    request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
        key: KEY,
      },
    })
      .then((response) => {
        setRecommended(response.data.items);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>{snippet?.title}</h1>
      <div className="row">
        <div className="column">
          <div className="watchScreen-player">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title={snippet?.title}
              allowFullScreen
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <div className="column">
          <RightBar list={recommended} />
        </div>
      </div>
    </div>
  );
};

export default WatchScreen;
