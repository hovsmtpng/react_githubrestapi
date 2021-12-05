// import logo from './logo.svg';
import './App.css';

import React, { useState, useRef } from "react";

import { Container, Topbar, RepoList } from "./Styles/";

import SearchBar from "./Components/SearchBar/";



function App() {
  const [user, setUser] = useState({
    profile: {},
    repos: [],
  });
  const [loading, setLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);

  const inputEl = useRef(null);

  const handleEnterKey = () => {
    const ENTER = 13;
    if (window.event.keyCode === ENTER) {
      search();
      inputEl.current.blur();
    }
  };

  const selectText = () => {
    inputEl.current.select();
  };

  async function getApiData() {
    const [profile, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${inputEl.current.value}`).then(
        (response) => response.json()
      ),
      fetch(`https://api.github.com/users/${inputEl.current.value}/repos`).then(
        (response) => response.json()
      ),
    ]);

    return { profile, repos };
  }

  async function search() {
    setLoading(true);
    const { profile, repos } = await getApiData();
    setLoading(false);

    if (profile.message === "Not Found") {
      // inputEl.current.focus();
      setIsFound(false);
    } else {
      setIsFound(true);
      setUser({
        profile,
        repos,
      });
    }
  }
  
  return (
    
    <Container>
      <Topbar>
        <h1>GitHub Search Repository</h1>
        <SearchBar
          onKeyPress={handleEnterKey}
          onFocus={selectText}
          searchFunction={search}
          loadingState={loading}
          inputRef={inputEl}
        />
      </Topbar>

      {!isFound ? <h1> Not Found </h1> : null}

    </Container>
  
  );
}

export default App;
