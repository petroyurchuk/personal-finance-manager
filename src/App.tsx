import React from "react";
import { Header } from "./components";
import { navigationList } from "./data/navigation";
import CategoriesPage from "./pages/CategoriesPage";

const App: React.FC = () => {
  return (
    <div className="w-[1026px] m-auto">
      <Header navigationItems={navigationList} />
      <CategoriesPage />
    </div>
  );
};
export default App;
