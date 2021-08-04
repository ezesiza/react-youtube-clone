import React from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";

const Sidebar = React.memo(() => {
 

// API Not Well Configured; 

/*   useEffect(() => {
    request( '/subscriptions', 
    {params: {
      part: "snippet",
      maxResults: 15,
      type: "video",
      mine:true,
      key: KEY,
    }})
      .then((response) => {
 console.log(response);
        setSubscription(response.data.items);
      })
      .catch((error) => console.log(error));
  }, []); */

  return (
    <div className="left-nav">
    <div className="nav-list">
      
        <Link to="/" className="current"><i className="fas fa-home"></i> Home</Link>
        <a href="/"><i className="fas fa-fire"></i> Trending</a>
        <a href="/"><i className="fas fa-photo-video"></i> Subscriptions</a>

    </div>
    <div className="nav-list">
        <a href="/"><i className="fas fa-icons"></i> Library</a>
        <a href="/"><i className="fas fa-history"></i> History</a>
        <a href="/"><i className="fas fa-stream"></i> Your videos</a>
        <a href="/"><i className="fas fa-clock"></i> Watch later</a>
        <a href="/"><i className="fab fa-hotjar"></i> Best Music 2021</a>
        <a href="/"><i className="fas fa-chevron-down"></i> Show more</a>
    </div>
    <div className="nav-list">
      <div className="header-text">Subscriptions</div>
      <ul>
        <li><a href="/"><img src={"../../img/up1.jpg"} alt="user1"/> TAAOOMA Apaoka..</a></li>
        <li><a href="/"><img src={"../../img/up2.jpg"} alt="user1"/> Traversy Media</a></li>
        <li><a href="/"><img src={"../../img/up3.jpg"} alt="user1"/> Laisisi Elenu</a></li>
        <li><a href="/"><img src={"../../img/up4.jpg"} alt="user1"/> Clever Programmer</a></li>
        <li><a href="/"><img src={'../../img/up5.jpg'} alt="user1"/> Julio Codes</a></li>
        <li><a href="/"><img src={"../../img/up6.jpg"} alt="user1"/> Jack Denmo</a></li>
        <li><a href="/"><img src={"../../img/up7.jpg"} alt="user1"/> Ed Sheeren</a></li>
        <a href="/"><i className="fas fa-chevron-down"></i> Show 80 more</a>
        
        
      </ul>
    </div>

    <div className="nav-list">
      <div className="header-text">More from YouTube</div>
      
        <a href="/"><i className="fab fa-youtube"></i> YouTube Premium</a>
        <a href="/"><i className="fas fa-gamepad"></i> Gaming</a>
        <a href="/"> <i className="fas fa-trophy"></i>Sporting</a>
        <a href="/"><i className="fas fa-video"></i> Live</a>
        <a href="/"><i className="fas fa-tshirt"></i> Fashion & Beauty</a>
        <a href="/"><i className="fas fa-lightbulb"></i> Learning</a>
      
    </div>

    <div className="nav-list">
      
        <a href="/"><i className="fas fa-cog"></i> Settings</a>
        <a href="/"><i className="fas fa-flag"></i> Repost history</a>
        <a href="/"><i className="fas fa-question-circle"></i> Help</a>
        <a href="/"><i className="fas fa-info-circle"></i> Send Feedback</a>
  
    </div>

    <footer>
      <div className="left-nav-footer">
        <div className="top-footer">
          <a href="/">About</a>
          <a href="/">Press</a>
          <a href="/">Copyright</a>
          <a href="/">Contact Us</a>
          <a href="/">Creators</a>
          <a href="/">Advertise</a>
          <a href="/">Developers</a>
        </div>

        <div className="bottom-footer">
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
          <a href="/">Policy & Safety</a>
          <a href="/">How Youtube Works</a>
        </div>
        <div className="copyright"><p>&copy; 2020 Google LLC</p></div>
      </div>
    </footer>


  </div>
  );
});

export default Sidebar;
