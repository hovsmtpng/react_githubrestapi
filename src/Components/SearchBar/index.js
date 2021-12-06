import React from "react";

import Button from '@mui/material/Button';
import { Container, UsernameInput } from "./style";
import { FaSpinner } from "react-icons/fa";

export default function SearchBar(props) {
  return (
    <Container>
      <UsernameInput
        placeholder="GitHub Username"
        type="text"
        // spellCheck="false"
        onKeyPress={props.onKeyPress}
        onFocus={props.onFocus}
        ref={props.inputRef}
      />
      <Button  variant="contained" color="error"
        onClick={() => props.searchFunction()}
        loadingState={props.loadingState ? "loading" : undefined}
        style={{height: '40px'}}>
        {props.loadingState ? <FaSpinner style={{fontSize : '20px'}}/> : "Cari"}
      </Button>
    </Container>
  );
}