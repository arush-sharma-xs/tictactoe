import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "./SocketContext";

function Landing() {
  const [search, setSearch] = useState(false);
  const { socket, currentUser, setCurrentUser } = useContext(SocketContext);

  const navigate = useNavigate();

  const startGame = () => {
    setSearch(true);
    socket?.emit("start_game", currentUser);
  };

  socket?.on("room_generated", ({ roomId }: { roomId: string }) => {
    navigate(`/room/${roomId}`);
  });

  return (
    <div className="relative h-screen w-full flex flex-col items-center  space-y-16 pt-16">
      <h1 className="text-6xl font-bold">✖️ Tick Tack Toe ⭕</h1>
      <input
        type="text"
        onChange={(e) => setCurrentUser(e.target.value)}
        id="player-name"
        placeholder="Enter player name"
        className="p-3 w-[600px] rounded-full ring-4 ring-orange-400 outline-none text-xl font-medium text-center"
      />
      <button
        className="p-5 rounded-full text-white hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:scale-110 duration-100 bg-orange-400 w-[200px] text-2xl font-bold"
        onClick={startGame}
      >
        Play
      </button>
      {search && (
        <h1 className="absolute bottom-6 text-2xl">
          waiting for player to join....
        </h1>
      )}
    </div>
  );
}

export default Landing;
