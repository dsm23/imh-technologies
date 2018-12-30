import React from "react";

import Card from "../../ProductsCard";
import Title from "../../Title";
import { ROUTER } from "../../../constants";

export default () => (
  <>
    <Title>Products and Services</Title>
    <div className="container">
      <h4 className="text-muted">Products</h4>
      <div className="row">
        {[
          { label: "Dent Instruments", href: ROUTER.DENT },
          {
            label: "Dranetz",
            href: ROUTER.DRANETZ
          },
          { label: "Electrotek Systems", href: ROUTER.ELECTROTEK },
          { label: "Power Standards Lab", href: ROUTER.POWER_STANDARDS }
        ].map(({ label, href }) => (
          <Card key={`${label}-card`} href={href} title={label} text={label} />
        ))}
      </div>
      <hr className="my-4" />
      <h4 className="text-muted">Services</h4>
      <div className="row">
        {[
          { label: "Consultancy from IMH", href: ROUTER.CONSULTANCY_FROM_IMH }
        ].map(({ label, href }) => (
          <Card key={`${label}-card`} href={href} title={label} text={label} />
        ))}
      </div>
    </div>
  </>
);
