import styled from "styled-components";

// Advanced Theme Provider
export const ButtonTM = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

ButtonTM.defaultProps = {
  theme: {
    main: "palevioletred",
  },
};

// Custom
export const CardContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin-bottom: 25px;
  overflow: hidden;
`;

export const CH2 = styled.h2`
  margin:0 0 8px 0;
`;

export const CH6 = styled.h6`
  opacity: 0.6;
  margin:0;
  margin-bottom:15px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CH3 = styled.h3`
  letter-spacing: 1px;
  margin: 10px 0;
`;

export const CH5 = styled.h5`
  letter-spacing: 1px;
  margin: 10px 0;
  // text-align:center;
`;

export const CardInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
  text-align:center;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;