import React from 'react'
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Body = styled.section`
  width: 100%;
  color: white;
  background: url('https://cdn.hipwallpaper.com/i/13/5/X67lhi.jpg');
  box-sizing: border-box;
  padding: 0 20%;
  text-align: center;
  article {
    padding: 15%;
  }
`

const Layout = props => {
  return (
      <div>
        <Header />
        <Body>
          <article>
            {props.children}
          </article>
        </Body>
        <Footer />
      </div>
  )
}


export default Layout