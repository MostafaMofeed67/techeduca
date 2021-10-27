import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./i18n";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Layout/Loading";

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
