import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SearchSection from "./components/SearchSection";
import { MenuContext } from "./store/MenuContext";

function App() {
  const [menuStatus, setMenuStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };

  const searchTermHandler = (term) => {
    setSearchTerm(term);
  };

  return (
    <MenuContext.Provider value={{ menuStatus, toggleMenu, closeMenu }}>
      <div className="bg-gray-100 min-h-screen">
        <Header onClick={searchTermHandler} />
        {!searchTerm && (
          <>
            <Banner onClick={searchTermHandler} />
            <MainSection />
          </>
        )}
        {searchTerm && <SearchSection searchTerm={searchTerm} />}
      </div>
    </MenuContext.Provider>
  );
}

export default App;
