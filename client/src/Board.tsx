import { useContext, useEffect } from "react";
import { SocketContext } from "./SocketContext";
import { useParams } from "react-router-dom";

function Board({ board, mark}: { board:string[], mark: string,}) {
  const {socket } : any  = useContext(SocketContext);
  const { roomId } = useParams();

  useEffect(()=> {
    const squares = document.querySelectorAll(".square");
    for(let i=0; i<squares.length; i++)
      squares[i].addEventListener("click",() => markSquare(i) )

  }, [board])

  const markSquare = (index : number) => {

    socket.emit("updateBoard", mark, index, roomId)

  }

  socket.on("updatedBoard", (newboard:string[]) => {
    board = newboard
    console.log(board)
  })

  return (
    <div className="grid grid-cols-3 ">
      {board && board.map(item => <div className="square w-[60px] h-[60px] border-2 border-black cursor-pointer">{item && item}</div>)}
    </div>
  )
}

export default Board;