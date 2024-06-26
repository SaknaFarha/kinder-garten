import React from "react";
import { Route, Routes } from "react-router-dom";
import OultetRoute from "./Routes/OultetRoute";
import HomePage from "./Pages/Common/HomePage";
import ProgrammePage from "./Pages/Common/ProgrammePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OultetRoute />}>
        <Route index element={<HomePage />} />
        <Route path="programme" element={<ProgrammePage />} />
      </Route>
    </Routes>
  );
}

export default App;
