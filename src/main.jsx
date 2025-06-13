import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const virualdom=ReactDOM.createRoot(document.getElementById('root'))
virualdom.render(
  <StrictMode><App/></StrictMode>
  )
