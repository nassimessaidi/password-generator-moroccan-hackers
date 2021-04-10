import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState("");
  return (
    <>
      <div className={`min-w-full min-h-screen ${theme}`}>
        <div className="py-10 px-2">
          <Main theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </>
  );
}

export default App;
