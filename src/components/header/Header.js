import React, {useState, useEffect, useRef} from "react";
import image from './../../img/profile.jpg';
import request from './../../services/services';
import{ Link, useHistory } from 'react-router-dom';
import './Header.css';

const KEY = "AIzaSyChUNNAhY5K0K2JmR_GqH6ggHsueimPLEg";

const Header = React.memo(props => {
  const { onVideosLoaded } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =  enteredFilter.length === 0 ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=US&key=${KEY}` 
        : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${enteredFilter}&key=${KEY}`;
        request.get(query).then((response) => {

            onVideosLoaded(response.data.items);
           return history.replace({pathname:`/`, state:response.data.items});
          }).catch((error) => handleError(error));
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onVideosLoaded, inputRef, history]);

  return (
      <header>
        <nav id="main-nav">
          <div className="left-icons">
            <i className="fas fa-bars menu-icon"></i>
            <div className="logo">
              <a href="/">
                <i className="fab fa-youtube">YouTube</i>
              </a>
            </div>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" 
              ref={inputRef}
              value={enteredFilter}
              onChange={event => setEnteredFilter(event.target.value)}
            />
            <div className="search-icon">
              <i className="fas fa-search"></i>
            </div>
          </div>

          <div className="right-icons">
            <i className="fas fa-video"></i>
            <i className="fas fa-braille"></i>
            <i className="fas fa-bell"></i>
            <img src={image} alt="profile-pics" />
          </div>
        </nav>
      </header>
  );
});

const handleError=(e)=>{
  throw new Error(e)
}

export default Header;
