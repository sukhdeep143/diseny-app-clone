import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <LoginCatant>
            <LoginImageOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                this is the Description fo the app, this is clone app not the real app so... i am sukhdeep singh   this is the Description fo the app, this is clone app not the real app so... i am sukhdeep singh 
            </Description>
            <LoginImageTwo src="/images/cta-logo-two.png" />
        </LoginCatant>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px
    );
    display: flex;
    align-items: center;
    justify-content: center;


    &:before{
        position: absolute;
        background-position: top;
        background-size:cover; 
        background-repeat: no-repeat;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/images/login-background.jpg' );
        z-index: -1;


    }
`

const LoginCatant = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
`

const LoginImageOne = styled.img`
    
    
`

const SignUp = styled.a`
    background-color: blue;
    padding: 20px 0;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    margin-top: 10px;

    &:hover{
        background-color: lightblue;
        color: black;
        
    }
`

const Description = styled.p`
    align-items: center;
    line-height: 1.5;
    text-align: center;
    font-size: 12px;
`

const LoginImageTwo = styled.img``