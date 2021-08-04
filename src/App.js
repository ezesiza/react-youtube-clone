import React, { useState, useCallback } from "react";
import VideosList from "./components/VideosList";
import WatchScreen from "./components/videos/watchscreen/WatchScreen"
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const Landing = () => {
  const [userList, setUserList] = useState([]);
  
  const filteredListHandler = useCallback(filteredList=>{
    setUserList(filteredList)
  }, [])
 
  return (
    <>
      <Header onVideosLoaded={filteredListHandler} />
      <div id="main-container">
        <Sidebar />
      </div>
    </>
  );
}

const App = (props) => {
  const { state } = useLocation();
  
  return (
    <Switch>
      <Route path="/" exact>
        <Landing></Landing>
        <VideosList list={state}/>
      </Route>

      <Route path="/watch/:id">
      <Landing></Landing>
        <WatchScreen />
      </Route>
    </Switch>
  );
};

export default App;































/* 

 // const [sidebar, setSideBar] = useState(false);

  // const onToggle = () => setSideBar(value => !value);
import React, { useContext } from "react";
import VideosList from "./components/VideosList";
import WatchScreen from "./components/videos/watchscreen/WatchScreen";
import {AuthContext} from './context/Authorization';
import AuthComponent from './components/auth/AuthComponent';

import {  Route, Switch } from 'react-router-dom';

const App = (props) => {
  const authContext = useContext(AuthContext);

  let authData = <AuthComponent />;
  if (authContext.isAuth) {
    authData = (

    <Switch>
    <Route path="/" exact>
        <VideosList />
    </Route>
    
    <Route path='/watch/:id'>
        <WatchScreen />
    </Route>
  </Switch>


)
  }
  return authData;
};

export default App;  */