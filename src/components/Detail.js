import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
          <img src='/images/move-z.jpg' />
        </Background>
        <ImageTitle>
          <img src='/images/dragon-ball-title.png' />
        </ImageTitle>
        <Controls>
          <PlayButton>
              <img src='/images/play-icon-black.png' />
              <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
          <img src='/images/play-icon-white.png' />
              <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
              <span>+</span>
          </AddButton>
          <GroupButton>
              <img src='/images/group-icon.png' />
          </GroupButton>
        </Controls>
          <SubTitle>
            This is a move 
          </SubTitle>

          <Description>
            kahhadoihfdoihfkdfnksdhfoiehfdnf;oehirohekfnsdhfsoifhodsf;ksdfhosdkfhiodshfoi,

            kahhadoihfdoihfkdfnksdhfoiksdfhosdkfhiodshfoikahhadoihfdoihfkdfnksdhf,
            oiehfdnf;oehirohekfnsdhfsoifhodsf;ksdfhosdkfhiodshfoik,
            ahhadoihfdoihfkdfnksdhfoiehfdnf;oehirohekfnsdhfsoifhodsf;ksdfhosdkfhiodshfoi
          </Description>

        
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw + 5px) ;
  position: relative;
  

`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.79;
   img{
    width: 100%;
    height: 100%;
    object-fit: cover;
   
   }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 15vw;
  min-width: 200px;
  margin-top: 20px;
  

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin-right: 20px;
  border-radius: 4px;
  font-size: 15px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.5px;
  cursor: pointer;
  height: 55px;
  text-transform: uppercase;


  &:hover{
    background-color: rgb(198, 198, 198);
    /* font-weight: bold; */
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249,249,249);
  color: white;
  

`

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 20px;

  
  span{
    font-size: 40px;
    color: white;
  }

  &:hover{
    background-color: rgb(198, 198, 198);
    /* font-weight: bold; */
  }
`

const GroupButton = styled(AddButton)`
  background: rgb(0,0,0);

`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  min-height: 20px;
  margin-top: 25px;
  color: rgb(249,249,249);

`

const Description = styled.div`
  line-height: 1.4;
  font-size: 26px;
  margin-top: 16px;
  color: rgb(249,249,249);
  max-width: 768px;
`