import styled, { css } from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: red;
  font-size: 2rem;
  &:hover {
    color: green;
  }

  ${({ react }) =>
    react &&
    css`
      background-color: black;
      color: #61dbfb;
      padding:.5rem 1rem;
      border-radius: 1rem;
      &:hover{
        opacity: .5;
      }
    `}
`;

export default StyledLink;
