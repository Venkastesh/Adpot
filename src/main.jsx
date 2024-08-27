import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./pages/Chats.jsx";
import Music from "./pages/Music.jsx";
import Communities from "./pages/Community.jsx";
import Calls from "./pages/Calls.jsx";
import ChatScreen from "./pages/ChatScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Chats />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "calls",
        element: <Calls />,
      },
      {
        path: "chatscreen",
        element: <ChatScreen />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
