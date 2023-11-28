import React from "react";
import { NavigationItem } from "../../@types/navigation";
import NavigationList from "../NavigationList";

type HeaderProps = {
  navigationItems: NavigationItem[];
};
const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  return (
    <header className=" bg-black min-h-[50px] text-white">
      <nav className="px-[10px]">
        <ul className="flex">
          {navigationItems.map((navigationItem) => (
            <NavigationList
              key={navigationItem.id}
              navigationItem={navigationItem}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
