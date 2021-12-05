import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const UsernameInput = styled.input`
  border: 1px solid grey;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #000;
  color: white;
  width: 90px;
  height: 50px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  ${(props) =>
    props.loadingState === "loading" &&
    css`
      svg {
        animation: ${rotate} 0.5s linear infinite;
      }
    `}
`;