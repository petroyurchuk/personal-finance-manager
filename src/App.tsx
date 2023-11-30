import React from "react";
import { Header } from "./components";
import { navigationList } from "./data/navigation";
import { Routes, Route } from "react-router-dom";
import {
  CategoriesPage,
  EditPage,
  EditTransactionPage,
  GeneratorPage,
  NewTransactionPage,
  RegistrationPage,
  TransactionPage,
} from "./pages";

const App: React.FC = () => {
  return (
    <div className="w-[1026px] m-auto">
      <Header navigationItems={navigationList} />
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/editing/:id" element={<EditPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/new-transaction" element={<NewTransactionPage />} />
        <Route path="/edit-transaction/:id" element={<EditTransactionPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Routes>
    </div>
  );
};
export default App;
