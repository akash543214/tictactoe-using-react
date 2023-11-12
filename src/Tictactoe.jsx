
import { useState, useCallback, useEffect, useRef } from 'react'
import Field from './Field.jsx'
import Msg from './Msg.jsx'

function Tictactoe()
{
  
  const fields = [0,1,2,3,4,5,6,7,8];
  let [move,setMove] = useState('0');
  let [boardData,setboardData] = useState(['','','','','','','','','']);
  let [gamePlay,setgamePlay] = useState(true);
  let [message,setMessage] = useState("Player 0's turn")

  
  const updateBoard = (index, newValue) => {

    const newboardData = [...boardData];

    newboardData[index] = newValue;

    setboardData(newboardData);

    if(move==='0')
    setMove('X');
    else
    setMove('0');
    
  };

  let i=0;
  let grid = fields.map((element)=>{
    return <Field key={element} dataindex={element} val={boardData[i++]}/>
    });
   
    
    function checkWin(move)
    {
       
  for(let i=0;i<=6;i=i+3)
  {
    if(boardData[i]===move && boardData[i+1]===move && boardData[i+2]===move)
    return true;
  }
 
for(let i=0;i<=2;i++)
{
  if(boardData[i]===move && boardData[i+3]===move && boardData[i+6]===move)
  return true;
}

  if(boardData[0]===move && boardData[4]===move && boardData[8]===move)
    return true;

    if(boardData[2]===move && boardData[4]===move && boardData[6]===move)
    return true;

    return false;
    }
    
      function isFull()
      {
        for(let i = 0;i<boardData.length;i++)
        {
          if(boardData[i]==='')
          return false;
        }

        return true;
      }
    useEffect(() => {
        
      if(checkWin('X'))
    {  
      setgamePlay(false);  
      setMessage("player X won");    
      }
      else if(checkWin('0'))
     { 
     
      setgamePlay(false);
      setMessage("player X won");    
    }
      else if(isFull()) setMessage("draw");
      
        else setMessage("Player "+move+"'s turn");

    }, [updateBoard])
  

    return (
        <div className="container">
      <main className="main">
        <Msg message={message} />
        <div className="gameboard" onClick={(e)=>{

          if(gamePlay)
          {
         let ind = parseInt(e.target.dataset.index);
         if(boardData[ind]==='')
            {
              updateBoard(ind,move);
            }
          }
        }}>
          {grid}
        </div>
        <div className="center">
          <button className="restart-button" id="restart-button" onClick={()=>{
            setboardData(['','','','','','','','','']);
            setgamePlay(true);
            setMessage("player 0's turn");
            }}>Restart</button>
        </div>
      </main>
      </div>
    )
}

export default Tictactoe