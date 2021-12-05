import styled from "styled-components";

const textColor = "#eeeeee";

export const RepoLink = styled.a`
  text-decoration: none;
`;

export const RepoInfo = styled.div`
  background-color: #f6f6f6;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  color: ${textColor};
  margin: 0 10px 10px 0;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #fff;
    box-shadow: 2px 1px 30px #00000029;
    transition: 0.4s;
  }
`;

export const Titles = styled.div`
  float: left;
  align-self: center;
  vertical-align: center;
  margin: 0 40px 0 0;
  p {
    margin-block-end: 0;
  }
  .icons {
    float: left;
    margin: 5px 5px;
  }
`;

export const RepoName = styled.h3`
  padding: auto;
  margin: 0;
  color: #000;
`;

export const RepoDescription = styled.p`
  color: #000;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: auto 0;
  .icons {
    float: left;
    margin: 3px 5px;
  }
`;

export const LangInfo = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: center;
  padding: 5px 0 5px 0;
  color: #000;
  p {
    margin-block-start: 0;
    margin: 0;
    padding: 0;
  }
`;

export const License = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: center;
  padding: 5px 0 5px 0;
  p {
    margin-block-start: 0;
    margin: 0;
    padding: 0;
  }
`;

export const NoLineBreak = styled.span`
  white-space: nowrap;
`;