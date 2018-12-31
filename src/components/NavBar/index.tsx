import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import classNames from "classnames";

import { ROUTER } from "../../constants";

interface Props extends RouteComponentProps<any> {
  title: string;
}

const arrLabels = [
  { label: "Home", path: ROUTER.HOME },
  { label: "About", path: ROUTER.ABOUT },
  { label: "Contact", path: ROUTER.CONTACT },
  { label: "News and Events", path: ROUTER.NEWS_AND_EVENTS },
  { label: "Technical Help", path: ROUTER.TECHNICAL_HELP },
  { label: "Products and Services", path: ROUTER.PRODUCTS_AND_SERVICES }
];

export default withRouter(
  ({ title, location: { pathname } }: Props) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = () => setIsExpanded(!isExpanded);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to={ROUTER.HOME} className="navbar-brand">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={classNames({ collapse: !isExpanded }, "navbar-collapse")}
          id="navbarColor01"
        >
          <ul className="navbar-nav ml-auto">
            {arrLabels.map(({ label, path }) => (
              <li
                className={classNames("nav-item", {
                  active: pathname === path
                })}
                key={`${label}-navbar`}
              >
                <Link to={path} className="nav-link" onClick={handleClick}>
                  {label}
                  {pathname === path && (
                    <span className="sr-only">(current)</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
);
