import React from "react";
import './Categories.css'

const Categories = React.memo(props => {
  
  return (
    <div id="container">
      <div className="recommendations">
        {props.categories.map((item)=>(
        <a href="/" key={item.id}>{item.snippet.title}</a>
        ))}
      </div>
    </div>
  );
});

export default Categories;
