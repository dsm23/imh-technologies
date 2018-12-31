import * as React from "react";
import { useState, useEffect } from 'react';
import { ReactNode } from "react";
import classNames from 'classnames';

interface Props {
  children: ReactNode;
}

const getWidth = () => window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

export default ({ children }: Props) => {
  const [width, setWidth] = useState(getWidth());

  const updateWidth = () => setWidth(getWidth());

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  });

  return (
    <h1 className={classNames({ 'display-3': width > 768 })}>{children}</h1>
  );
};
