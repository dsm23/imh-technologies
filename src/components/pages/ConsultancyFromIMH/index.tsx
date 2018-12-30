import React from "react";

import Markdown from "../../Markdown";
import Title from "../../Title";

const source = `
As well as purveyors of the most prestigious Electrical Monitoring
Equipment, IMH Technologies Ltd offer a first class service utilising
them.Over the last 12 years we have worked for many of the Utilities and
major companies such as:

* ABB
* Skanska
* Chloride Power Protection
* House of Lords
* GCHQ

Our expertise is called upon for:
 
* Flicker Studies - before and after remedial works
* G5/4 Harmonic Studies
* Nuisance Trips
* Voltage unbalance investigations
* Load Profile Studies
* Motor Inrush - Motor Performance
`;

export default () => (
  <>
    <Title>Consultancy from IMH</Title>
    <Markdown>{source}</Markdown>
  </>
);
