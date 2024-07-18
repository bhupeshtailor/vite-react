import React from "react";
import ReactDOM from "react-dom/client";
import Forms from "./pages/Forms";

// import Router from './Router';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <Forms />
  </React.StrictMode>
);
