import React from "react";
import Categories from "../components/categories/Categories";
import Videos from "../components/videos/Videos";

import "./HomePage.css";

const HomePage = (props) => {
  
  return (
    <div>
        <Categories categories={props.categories}/>
        <Videos list={props.list} />
      </div>
  );
};

export default HomePage;
