import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

const Content = () => (
  <>
    <h2
      className=" container-fluid m-2 p-3 text-center"
      style={{ background: '#b5bd36', color: '#fff' }}
      data-testid="content-title">
      Welcome to Umeme&apos;s Material Inspection System
    </h2>
    <div className="next-steps my-3" data-testid="content">
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
    <div style={{ background: '#b5bd36', color: '#fff' }}> djd</div>
  </>
);

export default Content;
