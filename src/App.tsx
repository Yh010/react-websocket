import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [socket, setsocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("socket connected");
      setsocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("received message:", message.data);
    };
  }, []);

  if (!socket) {
    return <div>LOADING..</div>;
  }

  return (
    <>
      <div>
        <input></input>
        <button
          onClick={() => {
            socket.send("hello there");
          }}
        >
          send
        </button>
      </div>
    </>
  );
}

export default App;
