import React from 'react'
import styled from 'styled-components'
export default function First(props) {
  return (
    <>
      <Container >
        <img  alt='dice pic' src="pics\dices 1.png"/>
        <Box><H>DICE GAME</H><Button onClick={props.toggle}>Play Now</Button></Box>
      </Container>
    </>
  )
}
const Container = styled.div`

max-width:1180px;
height:100vh;
display:flex;
justify-content:space-between;
align-items: center;
box-sizing:border-box;
margin: auto;
`
const Box = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
align-items:flex-end;
`
const H = styled.h1`
font-size:90px;
margin-bottom: 10px;
`
const Button = styled.button`
background-color:black;
color:white;
width:220px;
padding: 7px 0px;
cursor: pointer;
border-radius:5px;
border: 0px solid transparent;
&:hover{
    background-color: gray;
}
`