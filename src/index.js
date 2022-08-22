import React from "react";
// import ReactDOM from "react-dom"; // for Version 17 And Below
import { createRoot } from 'react-dom/client'; // for Version 18 And above
import App from "./App";
import './assets/styles/_main.scss';

createRoot(document.getElementById('root')).render(<App/>) // for Version 18 And above
// ReactDOM.render(<App /> , document.getElementById('root')); // for Version 17 And Below