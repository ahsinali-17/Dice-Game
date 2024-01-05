import First from './components/First';
import React,{useState} from 'react';
import Game from './components/Game';
function App() {
  const [IsGameBegin,SetIsGameBegin] = useState(false);
  const toggleGame = () =>{
    SetIsGameBegin(true);
  };
  return (
   <>
   
  { 
  !IsGameBegin?<First toggle ={toggleGame}/>:<Game/>
  }
   </>
  );
}

export default App;
