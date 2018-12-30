import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  title: string;
  text: string;
}

export default ({ href, title, text }: Props) => (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 card primary mb-3">
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{text}</p>
      <Link to={href} className="btn btn-primary">
        {title}
      </Link>
    </div>
  </div>
);
