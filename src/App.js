import { useState } from "react";
import Header from "./components/Header";
import { MenuContext } from "./store/MenuContext";

function App() {
  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };
  return (
    <MenuContext.Provider value={{ menuStatus, toggleMenu, closeMenu }}>
      <div className="App">
        <Header />
      </div>
    </MenuContext.Provider>
  );
}

export default App;
