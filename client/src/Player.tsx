import { useContext } from "react";
import { SocketContext } from "./SocketContext";

function Player() {
  const { currentUser }:any = useContext(SocketContext);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src="/avatar.png"
        width="100"
        height="100"
        alt="playerImage"
        className="rounded-full "
      />
      <h1 className="font-bold text-2xl">{currentUser}</h1>
      <h3>( You )</h3>
    </div>
  );
}

export default Player;
