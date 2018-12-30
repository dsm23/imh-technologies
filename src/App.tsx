import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/pages/About";
import ConsultancyFromIMH from "./components/pages/ConsultancyFromIMH";
import Contact from "./components/pages/Contact";
import Dent from "./components/pages/Dent";
import Dranetz from "./components/pages/Dranetz";
import Electrotek from "./components/pages/Electrotek";
import Home from "./components/pages/Home";
import NewsAndEvents from "./components/pages/NewsAndEvents";
import PowerStandards from "./components/pages/PowerStandards";
import ProductsLanding from "./components/pages/ProductsLanding";
import TechnicalHelp from "./components/pages/TechnicalHelp";

import NavBar from "./components/NavBar";

import { ROUTER } from "./constants";

export default () => (
  <Router>
    <>
      <NavBar title="IMH Technologies Ltd." />
      <div className="jumbotron">
        <Switch>
          <Route exact path={ROUTER.HOME} component={Home} />
          <Route path={ROUTER.ABOUT} component={About} />
          <Route
            path={ROUTER.CONSULTANCY_FROM_IMH}
            component={ConsultancyFromIMH}
          />
          <Route path={ROUTER.CONTACT} component={Contact} />
          <Route path={ROUTER.DENT} component={Dent} />
          <Route path={ROUTER.DRANETZ} component={Dranetz} />
          <Route path={ROUTER.ELECTROTEK} component={Electrotek} />
          <Route path={ROUTER.NEWS_AND_EVENTS} component={NewsAndEvents} />
          <Route path={ROUTER.POWER_STANDARDS} component={PowerStandards} />
          <Route
            path={ROUTER.PRODUCTS_AND_SERVICES}
            component={ProductsLanding}
          />
          <Route path={ROUTER.TECHNICAL_HELP} component={TechnicalHelp} />
        </Switch>
      </div>
    </>
  </Router>
);
