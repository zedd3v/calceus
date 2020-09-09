import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faToolbox,
  faBolt,
  faUser,
  faServer,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

export default ({ logo }: { logo: string }): JSX.Element => {
  return (
    <Col className="col-1 text-center">
      <div className="d-flex flex-column align-items-stretch h-100">
      
      {/*<img src={logo} width="64px" className="mb-3" alt="Calceus" />*/}
        <Link
          className="w-100 table-custom-hoverlight btn mb-4 flex-fill d-flex align-items-center justify-content-center"
          to="/"
        >
          <FontAwesomeIcon icon={faChartBar} fixedWidth size="lg" />
        </Link>
        <Link
          className="w-100 light btn mb-4 flex-fill d-flex align-items-center justify-content-center"
          to="/tasks"
        >
          <FontAwesomeIcon icon={faServer} fixedWidth size="lg" />
        </Link>
        <Link
          className="w-100 light btn mb-4 flex-fill d-flex align-items-center justify-content-center"
          to="/billing"
        >
          <FontAwesomeIcon icon={faUser} fixedWidth size="lg" />
        </Link>
        <Link
          className="w-100 light btn mb-4 flex-fill d-flex align-items-center justify-content-center"
          to="/proxies"
        >
          <FontAwesomeIcon icon={faBolt} fixedWidth size="lg" />
        </Link>
        <Link
          className="w-100 light btn mb-4 flex-fill d-flex align-items-center justify-content-center"
          to="/tools"
        >
          <FontAwesomeIcon icon={faToolbox} fixedWidth size="lg" />
        </Link>
        <Link
          className="w-100 light btn flex-fill d-flex align-items-center justify-content-center"
          to="/settings"
        >
          <FontAwesomeIcon icon={faCog} fixedWidth size="lg" />
        </Link>
      </div>
    </Col>
  );
};
