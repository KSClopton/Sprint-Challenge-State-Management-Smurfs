import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import axios from 'axios'
import { SmurfProvider } from "./components/SmurfContext";



ReactDOM.render(<SmurfProvider><App /></SmurfProvider>, document.getElementById("root"));
