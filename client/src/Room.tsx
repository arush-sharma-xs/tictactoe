import Player from "./Player";
import Board from "./Board";
// import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./SocketContext";
import Opponent from "./Opponent";

function Room() {
   const { socket }:any = useContext(SocketContext);
  const [mark, setMyMark] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [board, setBoard] = useState<any>([])

  useEffect(() => {
    socket?.on(
      "play_now",
      (op: { id: string; name: string; symbol: string, board: string[] }) => {
        console.log("opponennt", op);
        setId(op.id);
        setName(op.name);
        setMyMark(op.symbol);
        setBoard(op.board)
      }
    );

  }, [mark, id, name]);

  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center">
      <div className="flex items-center w-full justify-around">
        <Player />
        <Board board={board} mark={mark} />
        {id !== "" && <Opponent name={name} id={id} />}
      </div>
    </div>
  );
}

export default Room;
