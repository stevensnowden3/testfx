import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'primereact/button';

import contentData from '../utils/contentData';

const Content = () => (
  <>
    <h2
      className=" container-fluid m-2 p-3 text-center"
      style={{ background: '#b5bd36', color: '#fff' }}
      data-testid="content-title">
      Welcome to Umeme&apos;s Material Inspection System
    </h2>
    <div className="next-steps mt-3" data-testid="content">
      <Row className="d-flex justify-content-between" data-testid="content-items">
        {contentData.map((col, i) => (
          <Col key={i} md={5} className="mb-4">
            <h6 className="mb-3">
              <a href={col.link}>
                <FontAwesomeIcon icon="link" className="mr-2" />
                {col.title}
              </a>
            </h6>
            <p>{col.description}</p>
          </Col>
        ))}
      </Row>
    </div>
    <div className="mb-5 p-2" style={{ background: '#04392a', color: '#fff', marginTop: '-30px' }}>
      <div class="d-flex justify-content-end">
        <div className="text-end">
          <Button
            label="New Checklist"
            className="p-button-raised p-button-text me-2 text-center"
            style={{ background: '#b5bd36', color: '#fff' }}
          />
        </div>
        <div>
          <div className="text-end">
            <Button
              label="Inspections"
              className="p-button-raised p-button-text me-2 text-center"
              style={{ background: '#b5bd36', color: '#fff' }}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Content;
