import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10%;
  margin: auto;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Topbar = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
`;

export const RepoList = styled.ul`
  grid-area: repos;
  list-style: none;
  margin: 10px 0 0 0;
  padding-inline-start: 5px;
`;