import * as React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => (
  <h1 className="display-3">{children}</h1>
);
