import React from 'react'
import Styled, { styled } from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavManu>
          <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" />
            <span>WATHCLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
          </a>
        </NavManu>
        <UserImg src="/images/mani.png" />
    </Nav>
  )
}

export default Header


const Nav = Styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding:0 35px;

`

const Logo = styled.img`
  width: 80px;
  
`


const NavManu = Styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;


    img{
      height: 20px;
    }


    span
    {
      font-size: 14px;
      letter-spacing: 1.42px;
      position: relative;
    
        &:after
        {
          content: '';
          height: 2px;
          background-color: #fff ;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          transform: left center center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          opacity: 0;
          tansfrom: scaleX(0);
        }
    }

    &:hover{
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }

}
`


const UserImg = styled.img`
  width:48px; 
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`