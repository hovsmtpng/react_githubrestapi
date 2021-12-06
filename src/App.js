// import logo from './logo.svg';
// import './App.css';

import React, { useState, useRef } from "react";
import axios from 'axios';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SearchBar from "./Components/SearchBar/";
import GUserProfile from "./Components/GithubUserProfile/UserProfile";
import RepositoryCard from "./Components/Repository/Repository"
import { Topbar } from "./Styles/";


function App() {
  const [user, setUser] = useState({});
  const [repository, setRepository] = useState([]);

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

async function search() {
  setUser("");
  setRepository([]);
  setLoading(true);
  axios({
    method: "get",
    url: `https://api.github.com/users/${inputEl.current.value}`,
  }).then((res) => {
    setIsFound(true);
    setUser(res.data);
    setLoading(false);
  
})
.catch(err => {
  console.log(err);
  setIsFound(false);
  setLoading(false);
  setUser("");
  setRepository([]);

});
}

async function OpenListRepo() {
  axios({ 
    method: "get",
    url: `https://api.github.com/users/${user.login}/repos`,
  }).then((res) => {
    setRepository(res.data);
  });
}

return (
  

<Container maxWidth="md">
    <Topbar>
      <h1 style={{margin: '0', marginBottom:'20px'}}>GitSearchRepo Assessment Test</h1>
      <h4 style={{margin: '0', marginBottom:'5px'}}>Frontend Developer Candidate - PT Telekomunikasi Indonesia</h4>
      <h4 style={{margin: '0', marginBottom:'30px'}}>Hovely Simatupang | 082216601511 | hovelywzsimatupang@gmail.com</h4>
      <SearchBar
        onKeyPress={handleEnterKey}
        onFocus={selectText}
        searchFunction={search}
        loadingState={loading}
        inputRef={inputEl}
        />
    </Topbar>
    {!isFound ? <h3> <center>User Tidak Ditemukan</center> </h3> : null}

    {user.id && (
          <>
          <GUserProfile 
          data={user}
          OpenRepoFunction={OpenListRepo}
          />
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {repository.map((data) => (
                <Grid item xs={2} sm={4} md={4} key={data}>
                <RepositoryCard repo={data}></RepositoryCard>
              </Grid>
              ))}
          </Grid>
        </Box>
          </>
          )}

  </Container>
);
}

export default App;
