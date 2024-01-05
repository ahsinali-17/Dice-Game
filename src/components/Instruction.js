import React from 'react'
import styled from 'styled-components'

function Instruction() {
  return (
    <>
      <Instruct>
        <h3>How to play dice game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  dice points will be dedcuted </p>
      </Instruct>
    </>
  )
}

export default Instruction
const Instruct = styled.div`
padding: 35px;
margin:40px auto;
background-color:peachpuff;
width:800px;
height:210px;
 p{
  font-weight:50;
 }
 h3{
  font-size:25px;
 }
`