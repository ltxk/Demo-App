import React, { Fragment } from "react";
import Navigation from './Components/Navigation/Navigation'
import Faq from './Components/Faq'
import Store from './Components/Store'
import Help from './Components/Help'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Discovery from "./Components/Main/Discovery";
import Browse from "./Components/Main/Browse"
import New from "./Components/Main/New"

const App = () => {

  return (
    <Fragment>
      <Navigation />
      <Outlet />

      <Routes>
        <Route path="/" element={<Navigate replace to="store" />} />
        <Route path="store" element={<Store />}>
          <Route index element={<Discovery />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="browse" element={<Browse />} />
          <Route path="new" element={<New />} />

        </Route>

        <Route path="faq" element={<Faq />} />
        <Route path="help" element={<Help />} />

      </Routes>
      <div>Footer</div>
    </Fragment>


  );

}
export default App

