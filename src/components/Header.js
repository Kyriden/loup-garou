import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
color: white;
  background-color: ${props => props.theme.normal};
  width: 100%;
  padding: 15px;
`
HeaderContainer.defaultProps = {
  theme: {
    normal: "#850606"
  }
}

const Header = () => {
  return (
      <HeaderContainer>
         <Link to="/"  style={styles.link}>What a Loup-grraou</Link>
      </HeaderContainer>
  )
}

const styles = {
    link: {
        color: "white",
        fontWeight:"bold",
        fontSize: "10px",
        fontFamily: "Comic Sans MS",
        textDecoration: "none"
    }
}

export default Header