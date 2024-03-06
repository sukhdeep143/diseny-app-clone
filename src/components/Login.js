import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <LoginCatant>
            <LoginImageOne src="/images/cta-logo-one.svg" />
        </LoginCatant>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px
    );

    &:before{
        position: absolute;
        background-position: top;
        background-size:cover; 
        background-repeat: no-repeat;
        content: '';
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
    width: 70%;
`

const LoginImageOne = styled.div`
    height: 50%;
    width: 70%;
    z-index: 1;
    img {
        width: 100%;
        height: 100%;
    }
`
