import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'primereact/button';

import contentData from '../utils/contentData';

const Content = () => (
  <div style={{ marginTop: '-25px' }}>
    <h2
      className=" container-fluid mt-1 p-3 text-center"
      style={{ background: '#b5bd36', color: '#fff' }}
      data-testid="content-title">
      Umeme&apos;s Material Inspection System
    </h2>
    <div className="next-steps mt-4" data-testid="content">
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
    <div className="mb-4 p-2" style={{ color: '#fff', marginTop: '-80px' }}>
      <div class="d-flex justify-content-end">
        <div className="text-end">
          <a href="/InspectionForm">
            <Button
              label="New Checklist"
              icon="pi pi-plus-circle"
              className="p-button-raised p-button-text me-2 text-center"
              style={{ background: '#04392a', color: '#fff' }}
            />
          </a>
        </div>
        <div>
          <div className="text-end">
            <a href="/materialsDataTable">
              <Button
                label="Inspections"
                icon="pi pi-eye"
                className="p-button-raised p-button-text me-2 text-center"
                style={{ background: '#04392a', color: '#fff' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
