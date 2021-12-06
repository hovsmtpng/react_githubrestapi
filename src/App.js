// import logo from './logo.svg';
import './App.css';

import React, { useState, useRef } from "react";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SearchBar from "./Components/SearchBar/";
import GUserProfile from "./Components/GithubUserProfile/UserProfile";
import RepositoryCard from "./Components/Repository/Repository"
import { Topbar } from "./Styles/";


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
      setRepository({
        reposList: [],
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
    <Container maxWidth="md">
      <Topbar>
        <h1>GitSearchRepo</h1>
        <SearchBar
          onKeyPress={handleEnterKey}
          onFocus={selectText}
          searchFunction={search}
          loadingState={loading}
          inputRef={inputEl}
          />
      </Topbar>
      {!isFound ? <h3> <center>User Tidak Ditemukan</center> </h3> : null}

      {user.profile.id && (
            <GUserProfile 
            data={user.profile}
            OpenRepoFunction={OpenListRepo}
            />
            )}
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {repository.reposList.map((data) => (
            <Grid item xs={2} sm={4} md={4} key={data}>
            <RepositoryCard repo={data}></RepositoryCard>
          </Grid>
          ))}
      </Grid>
    </Box>
    </Container>
  
  );
}

export default App;
