import React from "react";

import { Container, UsernameInput, SearchButton } from "./style";
import { FaSpinner } from "react-icons/fa";

export default function SearchBar(props) {
  return (
    <Container>
      <UsernameInput
        placeholder="GitHub Username"
        type="text"
        spellCheck="false"
        onKeyPress={props.onKeyPress}
        onFocus={props.onFocus}
        ref={props.inputRef}
      />
      <SearchButton
        onClick={() => props.searchFunction()}
        loadingState={props.loadingState ? "loading" : undefined}
      >
        {props.loadingState ? <FaSpinner /> : "Search"}
      </SearchButton>
    </Container>
  );
}