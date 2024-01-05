import React,{useState} from 'react';
import styled from 'styled-components';
import Instruction from './Instruction';
export default function Game() {
    
    const [Pick,setPick] = useState(0);
    const [IsPicked,setIsPicked] = useState(false);
    const [DiceNum,setDiceNum] = useState(1);
    const [Points,setPoints] = useState(0);
    const [Rules,setRules] = useState(false);

    const showRules =()=>{
      setRules(Rules => !Rules);
    }
    
    const random  = () =>{return Math.floor(Math.random()*6 + 1);};

    const chngNum = ()=>{
      if(IsPicked){
       let ans = random();
       setDiceNum(ans);
       if(Pick===ans) setPoints(Points+Pick);
      else setPoints(Points - 2);
      setIsPicked(false);
    }
      else alert("You have not selected any number!!!");
    }

    const zero =()=>{setPoints(0)};

    const updatePick1=()=>{
        setPick(1);
        setIsPicked(true);

    }
    const updatePick2=()=>{
      setPick(2);
      setIsPicked(true);
  }
  const updatePick3=()=>{
    setPick(3);
    setIsPicked(true);
}
const updatePick4=()=>{
  setPick(4);
  setIsPicked(true);
}
const updatePick5=()=>{
  setPick(5);
  setIsPicked(true);
}
const updatePick6=()=>{
  setPick(6);
  setIsPicked(true);
}
  return (
    <>
    
    <Topbar>
    <Score>
      <H>{Points}</H>
    <P>Total Score</P>
    </Score>
    <Option>
      <Opt>
      <Choices  onClick={updatePick1}>1</Choices>
      <Choices  onClick={updatePick2}>2</Choices>
      <Choices  onClick={updatePick3}>3</Choices>
      <Choices  onClick={updatePick4}>4</Choices>
      <Choices  onClick={updatePick5}>5</Choices>
      <Choices  onClick={updatePick6}>6</Choices>
      </Opt>
      <P1>Select Number</P1>
    </Option>
    </Topbar>
    <Gamee> 
      <div className='switchdice' onClick={chngNum}>
      <img src={`/pics/dices/dice_${DiceNum}.png`} alt='Game dice'/>
      </div>
      <P1>Click on Dice to Roll</P1>
      <But1 onClick={zero}>Reset Score</But1>
      <But2 onClick={showRules}>Show Rules</But2>
    </Gamee>
    {Rules?<Instruction/>:""}
    </>
  )
}


const Topbar = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height: 150px;
max-width:100%;
margin:50px 0 0 0;
padding:0;
`
 const Score = styled.div` 
  max-width:140px;
  max-height:150px;
  display:flex;
  flex-direction:column;
  align-items:center;
 `
 const H = styled.h1`
   font-size:80px;
   margin:0;
 `
 const P=styled.p`
 margin:0;
 font-size:24px;
 font-weight:300;
 `
 const P1=styled.p`
 margin:10px 20px 0 0;
 font-size:20px;
 font-weight:300;
 `
 const Option = styled.div`
 display:flex;
 flex-direction:column;
 align-items:flex-end;
 margin: 0 10px;
 `
 const Opt = styled.div`
 display:flex;
 justify-content:space-evenly;
 align-items:center;
 width: 600px;
 `
 const Choices = styled.div`
  width:70px;
  height:70px;
  border:1px solid black;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
    &:active{
      background-color:black;
    color:white;
    }
  
 `
 const Gamee = styled.div`
 height:70vh;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 .switchdice{
  cursor: pointer;
 }
 `

 const But1 =styled.button`
  width:220px;
  height:44px;
  border:1px solid black;
  border-radius:5px;
  margin: 25px 0 10px 0;
  cursor: pointer;
  &:hover{
    background-color:gray;
  }
 `
 const But2 = styled.button`
 width:220px;
  height:44px;
  background-color:black;
  color:white;
  border:1px solid black;
  cursor: pointer;
  border-radius:5px;
  &:hover{
    background-color:gray;
  }
 `