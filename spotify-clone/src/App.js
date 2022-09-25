import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playLists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;


    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })
      spotify.getUserPlaylists().then(playLists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playLists: playLists
        })
      })
      spotify.getPlaylist('3i0U19dmsS6AfMESvCahzl').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
  }, [token, dispatch]);

  console.log(playLists)


  return (
    <div className="App">{token ? <Player spotify={spotify}/> : <Login />}</div>
  );
}

export default App;
