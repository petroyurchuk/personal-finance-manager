import React from "react";
import { Header } from "./components";
import { navigationList } from "./data/navigation";
import CategoriesPage from "./pages/CategoriesPage";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import EditPage from "./pages/EditPage";

const App: React.FC = () => {
  return (
    <div className="w-[1026px] m-auto">
      <Header navigationItems={navigationList} />
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/editing/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
};
export default App;
