import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default (): JSX.Element => {
  return (
    <Col className="col-11 pl-4 pr-5">
      <Row className="h-100 align-items-center justify-content-center light">
        <Col className="h-100 p-3">
          <h4>Tasks</h4>
          <Table className="text-white table-custom-hover" responsive hover>
            <thead>
              <tr>
                <th>Store</th>
                <th>Product</th>
                <th className="text-center">Size</th>
                <th>Profile</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[...new Array(10)].map(() => {
                return (
                  <tr>
                    <td>footlocker</td>
                    <td>ugly shoes</td>
                    <td className="text-center">12 US</td>
                    <td>main</td>
                    <td className="status-yellow">Idle</td>
                    <td className="text-right">
                      <div className="d-flex flex-row-reverse flex-nowrap text-right">
                        <FontAwesomeIcon icon={faPlay} size="sm" />
                        <FontAwesomeIcon icon={faPen} size="sm" className="mx-3" />
                        <FontAwesomeIcon icon={faTrash} size="sm" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Col>
  );
};
