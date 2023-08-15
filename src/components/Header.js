import React from "react";
import styled from "styled-components";

const Header = () => {
  return <MainHeader>Headre</MainHeader>;
};
const MainHeader = styled.header`
  padding: 0 4.8px;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
