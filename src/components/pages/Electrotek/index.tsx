import React from "react";

import Markdown from "../../Markdown";
import Title from "../../Title";

const source = `
To go straight to the
[Electrotek website](https://www.electrotek.com/)

Distributed systems of Power Quality Analysers
gather considerable quantities of data.
Electrotek specialises in PQView and PQWeb
software that are able to make sense of all
this data to produce meaningful reports
and year-on-year comparisons.
`;

export default () => (
  <>
    <Title>Electrotek Systems</Title>
    <Markdown>{source}</Markdown>
  </>
);
