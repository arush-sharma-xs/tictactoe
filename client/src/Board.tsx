import { useEffect } from "react";

function Board({ board, mark }: { board:string[], mark: string }) {
  
  useEffect(()=> {
    const squares = document.querySelectorAll(".square");
    for(let i=0; i<squares.length; i++)
      squares[i].addEventListener("click",(e) => markSquare(e, i) )

  }, [board])

  const markSquare = (e:any, index : number) => {
    console.log(index)

  }

  return (
    <div className="grid grid-cols-3 ">
      {board && board.map(item => <div className="square w-[60px] h-[60px] border-2 border-black cursor-pointer">{item !== null && mark}</div>)}
    </div>
  )
}

export default Board;