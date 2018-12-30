import React from "react";
import png from "../../../vendors/img/techpic.png";

import Markdown from "../../Markdown";
import Title from "../../Title";

export default () => (
  <>
    <Title>Technical Help</Title>
    <Markdown>
      In the UK we often come across an HV installation where there are two CT's
      with the Yellow Phase as Common. Great care should be taken, especially
      when 'jumpering' the yellow phase to A- and B- inputs.
    </Markdown>
    <img src={png} className="mx-auto d-block img-fluid" alt="" />
  </>
);
