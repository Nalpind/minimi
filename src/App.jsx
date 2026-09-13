import { useState } from "react";
import Customizer from "./pages/Customizer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen w-screen grow">
        <Customizer />
      </div>
    </>
  );
}

export default App;
