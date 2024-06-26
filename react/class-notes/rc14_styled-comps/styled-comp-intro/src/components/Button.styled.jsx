import styled from "styled-components";

export const Button = styled.button`
  background-color: hotpink;
  color: white;
  border: 2px solid hotpink;
  font-size: 1.3rem;
  padding: 0.7rem 3rem;
  border-radius: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  &:hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`

export const PinkButton = styled.button`
  background-color: ${({ primary }) => (primary ? "white" : "hotpink")};
  color: ${({ primary }) => (primary ? "hotpink" : "white")};
  border: 2px solid hotpink;
  font-size: 1.3rem;
  padding: 0.7rem 3rem;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

//! Extension
export const DarkButton = styled(Button)`
  background-color: black;
  color: white;
  border: none;
`;
