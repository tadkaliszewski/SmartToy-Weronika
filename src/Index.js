import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/main.scss";
import App from "./App"


const Index = () => <App/>


const container = document.getElementById("index");
const root = createRoot(container);
root.render(<Index />);