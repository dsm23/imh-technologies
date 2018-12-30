import React from "react";

import Markdown from "../../Markdown";
import Title from "../../Title";

const source = `
Click here to go straight to the
[Dent Instruments Inc website](https://www.dentinstruments.com).

Probably the neatest, smallest, lightest, professional
Energy Logger available at any price is the low-cost
ElitePro XC from Dent Instruments Inc of Bend,
Oregon, USA. The details can be viewed on their
web-site as above, together with their simple-to-use
Lighting Loggers, Motor Loggers and Electrical Load
Loggers. Unique SMARTWARE analysis software
produces professional, instant reports highlighting
energy consumption.
`;

export default () => (
  <>
    <Title>Dent Instruments</Title>
    <Markdown>{source}</Markdown>
  </>
);
