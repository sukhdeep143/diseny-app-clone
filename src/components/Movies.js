/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Movies() {
  return (
    <Container>
        
        <h4>You will like</h4>
        <Content>

                <Wrap>
            <Link to="/Detail">
                    <img src='/images/dragon-ball-z-.jpg' />
            </Link>
                </Wrap>
            <Link to="/Detail">
            <Wrap>
                <img src='/images/login-background.jpg' />
            </Wrap>
            </Link>
            <Link to="/Detail">
            <Wrap>
                <img src='/images/login-background.jpg' />
            </Wrap>
            </Link>
            <Link to="/Detail">
            <Wrap>
                <img src='/images/login-background.jpg' />
            </Wrap>
            </Link>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    height: 50vh;

`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4,minmax(0, 1fr));
  grid-gap: 25px; 
  
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.2);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /80%) 0px 15px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0 /70%) 0px 30px 25px -10px;
        transform: scale(1.1);
        

    }
`