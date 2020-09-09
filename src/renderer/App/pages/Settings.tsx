import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (): JSX.Element => {
  return (
    <Col className="col-10">
      <Row className="align-items-center justify-content-center p-3">
        <Row className="align-items-center justify-content-center w-100 py-4 px-2 light mb-4 rounded">
          <Col className="h-100 text-center justify-content-center align-items-center d-flex flex-column">
            <p>settings</p>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};
