import React from 'react'
import styled from "styled-components";

const FooterContainer = styled.footer`
  color: white;
  background-color: ${props => props.theme.normal};
  text-align: center;
  width: 100%;
  padding: 20px;
`

FooterContainer.defaultProps = {
  theme: {
    normal: "#850606"
  }
}

const Footer = () => {
  return (
      <FooterContainer style={styles.link}>
         loupgrraou.com | &copy; All rights reserved. 
      </FooterContainer>
  )
}

const styles = {
    link: {
        fontSize: "8px",
        fontFamily: "Comic Sans MS"
    }
}


export default Footer