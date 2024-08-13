import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route } from "react-router-dom";

import CreateVehicle from "./components/CreateVehicle";
import EditVehicle from "./components/EditVehicle";
import IndexVehicle from "./components/IndexVehicle";
import Navbar from "./components/Navbar";
import ReadVehicle from "./components/ReadVehicle";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateVehicle />} />
        <Route path="/edit/:id" element={<EditVehicle />} />
        <Route path="/view" element={<IndexVehicle />} />
        <Route path="/read/:id" element={<ReadVehicle />} />
      </Routes>
    </div>
  );
}

export default App;
