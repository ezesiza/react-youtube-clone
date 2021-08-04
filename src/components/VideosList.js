import React, { useState, useEffect } from "react";
import request from "./../services/services";
import Header from "./header/Header";
import HomePage from "../home/HomePage";

const KEY = "AIzaSyChUNNAhY5K0K2JmR_GqH6ggHsueimPLEg";

const VideosList = (props) => {
  // const [videosList, setVideosList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
    
  //  useEffect(() => {
  //     request.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=US&key=${KEY}` )
  //     .then((response) => {
  //         setVideosList(response.data.items);
  //       })
  //       .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    
      request.get( `videoCategories?part=snippet&regionCode=US&maxResults=28&key=${KEY}`)
        .then((response) => {
          setCategoriesList(response.data.items);
        })
        .catch((error) => console.log(error));

  }, []);

  return (
    <div>
      {/* <Header  onVideosLoaded={() => {}} /> */}
      <HomePage list={props.list} categories ={categoriesList}/>
    </div>
  );
};

export default VideosList;
