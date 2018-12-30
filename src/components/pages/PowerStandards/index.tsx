import React from "react";

import Markdown from "../../Markdown";
import Title from "../../Title";

const source = `
To go straight to the
[PSL website](https://www.powerstandards.com/)
`;

export default () => (
  <>
    <Title>Power Standards Lab</Title>
    <Markdown>{source}</Markdown>
  </>
);
