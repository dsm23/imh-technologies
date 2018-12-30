import React from "react";

import Markdown from "../../Markdown";
import Title from "../../Title";

const source = `
To go straight to the
[Dranetz website](http://www.dranetz.com/)

The Power Quality Instrumentation manufactured by Dranetz divides into two main ranges:

* Handhelds and portables
* Fixed point remotely controlled and interrogated instruments.

Dranetz has class leading developments addressing each of
these market segments.The HDPQ and the Encore Series can
be seen in detail by visiting their website.
`;

export default () => (
  <>
    <Title>Dranetz</Title>
    <Markdown>{source}</Markdown>
  </>
);
