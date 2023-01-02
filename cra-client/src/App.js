/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */
import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import NoServerName from "./auth/NoServerName";
import Frame from "./Frame";
import IdentificationContext from "./contexts/IdentificationContext";

export default function App() {
  return (
    <div>
      <IdentificationContext>
        <Router>
          <Routes>
            <Route element={<NoServerName/>}  path="/"  />
            <Route element={<Login currentURL={window.location.href} />}  path="/*/login"  />
            <Route element={<Frame />}  path="/*/" />
          </Routes>
        </Router>
      </IdentificationContext>
    </div>
  );
}
