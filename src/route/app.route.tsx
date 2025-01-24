import Demo from "@components/demo";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* define route hear  */}
        <Route path="/" element={<Demo />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
