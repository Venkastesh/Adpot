import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";
import { Model } from "./model";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import NavigationContextProvider from "./NavigationContext";
import Platform from "./navigators/Platform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NavigationContextProvider>
      <Platform />
    </NavigationContextProvider>
  );
}

export default App;
