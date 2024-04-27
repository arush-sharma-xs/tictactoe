import Player from "./Player";
import Board from "./Board";
// import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./SocketContext";
import Opponent from "./Opponent";

function Room() {
  // const { roomId } = useParams();
  const { socket, currentUser } = useContext(SocketContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  socket.on("play_now", (op: { id: string; name: string }) => {
    console.log("opponennt", op);
    setId(op.id);
    setName(op.name);

    console.log(`cu : ${currentUser}, opp : ${name}`);
  });

  return (
    <div className="relative flex flex-col bg-orange-100 w-full h-screen items-center justify-center">
      <div className="flex items-center w-full justify-around">
        <Player user={currentUser} />
        <Board />
        {id !== "" && <Opponent name={name} id={id} />}
      </div>
    </div>
  );
}

export default Room;
