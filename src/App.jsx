import { useState } from "react";
import NavigationContextProvider from "./NavigationContext";
import Platform from "./navigators/Platform";
import UsersContextProvider from "./utils/UsersContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NavigationContextProvider>
      <UsersContextProvider>
        <Platform />
      </UsersContextProvider>
    </NavigationContextProvider>
  );
}

export default App;
