// import logo from './logo.svg';
import './App.css';

import React, { useState, useRef } from "react";

import { Container, Topbar } from "./Styles/";
import Box from '@mui/material/Box';

import SearchBar from "./Components/SearchBar/";
import GUserProfile from "./Components/GithubUserProfile/UserProfile";
import RepositoryCard from "./Components/Repository/Repository"


function App() {
  const [user, setUser] = useState({
    profile: {},
  });

    const [repository, setRepository] = useState({
      reposList:[]
    });
  // const [isFoundRepo, setIsFoundRepo] = useState(true);

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
    const [profile] = await Promise.all([
      fetch(`https://api.github.com/users/${inputEl.current.value}`).then(
        (response) => response.json()
      ),
    ]);
    return { profile };
  } 

  async function search() {
    setLoading(true);
    const { profile } = await getApiData();
    setLoading(false);

    if (profile.message === "Not Found") {
      // inputEl.current.focus();
      setIsFound(false);
      setUser({
        profile: {},
      });
    } else {
      setIsFound(true);
      setUser({
        profile,
      });
    }
  }

  async function getApiDataRepos() {
    const [reposList] = await Promise.all([
      fetch(`https://api.github.com/users/${user.profile.login}/repos`).then(
        (response) => response.json()
      ),
    ]);
    
    return { reposList };
  }

  async function OpenListRepo() {
    // setLoading(true);
    const { reposList } = await getApiDataRepos();
    // setLoading(false);

    setRepository({
      reposList,
    });

  }
  
  return (
    
    <Container>
      <Topbar>
        <h1>Github Search</h1>
        <SearchBar
          onKeyPress={handleEnterKey}
          onFocus={selectText}
          searchFunction={search}
          loadingState={loading}
          inputRef={inputEl}
          />
      </Topbar>
      {!isFound ? <h1> User Tidak Ditemukan </h1> : null}

      {user.profile.id && (
        <>
          <>
          <GUserProfile 
            data={user.profile}
            OpenRepoFunction={OpenListRepo}
          ></GUserProfile>
          </>
          <div style={{ width: '100%' }}>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {repository.reposList.map((data) => (
                <RepositoryCard repo={data}></RepositoryCard>
            ))}
            </Box>
          </div>
        </>
      )}
    </Container>
  
  );
}

export default App;
