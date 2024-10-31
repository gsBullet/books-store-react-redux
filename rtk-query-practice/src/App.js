import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";


const App = () => {
  return (
  
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="edit-book/:id" element={<EditBook />} />
          </Route>
        </Routes>
      </HashRouter>
   
  );
};

export default App;
