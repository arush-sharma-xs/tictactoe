import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Room from './Room.tsx';
import { SocketContextProvider } from './SocketContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
  },



]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SocketContextProvider>
      <RouterProvider router={router} />
    </SocketContextProvider>
  </React.StrictMode>,
)
