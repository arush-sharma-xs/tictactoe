import React, { useEffect, useState, createContext } from "react";
import { Socket, io } from "socket.io-client";

export const SocketContext = createContext();

export function SocketContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const socket = io("ws://localhost:3000");
    setSocket(socket);
  }, []);

  return (
    <SocketContext.Provider value={{ socket, currentUser, setCurrentUser }}>
      {children}
    </SocketContext.Provider>
  );
}
