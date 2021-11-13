import { createContext } from "react";
export const MenuContext = createContext({
  menuStatus: "false",
  toggleMenu: () => {},
  closeMenu: () => {},
});