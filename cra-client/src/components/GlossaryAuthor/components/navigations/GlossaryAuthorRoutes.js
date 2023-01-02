/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */
import React from "react";
// import { IdentificationContext } from "../../../../contexts/IdentificationContext";
import { Route, Routes, Redirect } from "react-router-dom";
// navigation components
import GlossaryAuthorNavigation from "./GlossaryAuthorNavigation";
import TermAuthorNavigation from "./GlossaryAuthorNavigation";
import CategoryAuthorNavigation from "./GlossaryAuthorNavigation";
import GlossaryAuthorGraphNavigation from "./GlossaryAuthorGraphNavigation";
// children component
import NodeChildren from "../NodeChildren";
// create category components
import CreateNode from "../create/CreateNode";
// Quick terms
import GlossaryQuickTerms from "../GlossaryQuickTerms";
// update Category
import UpdateNode from "../update/UpdateNode";

export default function GlossaryAuthorRoutes({ glossaryAuthorURL }) {
  console.log("glossaryAuthorURL=" + glossaryAuthorURL);
 
  // the top paths
  function getGlossariesPath() {
    let path;
    const currentLocationArray = glossaryAuthorURL.split("/");
    const lastSegment = currentLocationArray[currentLocationArray.length - 1];
    if (lastSegment === "glossaries") {
      // if we are navigated to via the task drop down we get a url ending with glossaries
      path = glossaryAuthorURL;
    } else {
      // if we are navigated to as the default component loaded under glossary-author then we need to append the glossaries
      path = glossaryAuthorURL + "/glossaries";
    }
    console.log("getGlossariesPath " + path);
    return path;
  }
  function getTermsPath() {
    let path;
    const currentLocationArray = glossaryAuthorURL.split("/");
    const lastSegment = currentLocationArray[currentLocationArray.length - 1];
    if (lastSegment === "terms") {
      // if we are navigated to via the task drop down we get a url ending with terms
      path = glossaryAuthorURL;
    } else {
      // if we are navigated to as the default component loaded under glossary-author then we need to append the terms
      path = glossaryAuthorURL + "/terms";
    }
    console.log("getTermsPath " + path);
    return path;
  }
  function getCategoriesPath() {
    let path;
    const currentLocationArray = glossaryAuthorURL.split("/");
    const lastSegment = currentLocationArray[currentLocationArray.length - 1];
    if (lastSegment === "categories") {
      // if we are navigated to via the task drop down we get a url ending with terms
      path = glossaryAuthorURL;
    } else {
      // if we are navigated to as the default component loaded under glossary-author then we need to append the categories
      path = glossaryAuthorURL + "/categories";
    }
    console.log("getCategriesPath " + path);
    return path;
  }
  function getGlossaryAuthorPathAny() {
    console.log("glossaryAuthorURL" + glossaryAuthorURL);
    return glossaryAuthorURL + "/:anypath*/";
  }

  return (
    <Routes>
    {/* top level first */}
    <Route
        
        path={getGlossariesPath()}
        element={<GlossaryAuthorNavigation />}
      ></Route>
      <Route
        
        path={getTermsPath()}
        element={<TermAuthorNavigation />}
      ></Route>
      <Route
        
        path={getCategoriesPath()}
        element={<CategoryAuthorNavigation />}
      ></Route>
      <Route path={getGlossaryAuthorPathAny() + "quick-terms"}  element={<GlossaryQuickTerms />} ></Route> 
      {/* Adds */}
      <Route path={getGlossaryAuthorPathAny() + "add"}  element={<CreateNode />}></Route>

      {/* edits */}
      <Route path={getGlossaryAuthorPathAny() + "edit"}  element={<UpdateNode />}></Route>

      {/* children   */}
       <Route path={getGlossaryAuthorPathAny() + "terms"}  element={<NodeChildren />} ></Route>
       <Route path={getGlossaryAuthorPathAny() + "categories"}  element={<NodeChildren />} ></Route>
       {/* visualise */}
       <Route path={getGlossaryAuthorPathAny() + "visualise"}  element={<GlossaryAuthorGraphNavigation />}></Route> 

      <Redirect path={glossaryAuthorURL} exact to={getGlossariesPath()} />
    

      <Route path="/*" element={<h1>Route not recognised</h1>}></Route>
      {/* <Route render={() => <h1>Route not recognised!!</h1>}></Route> */}
    </Routes>
  );
}
