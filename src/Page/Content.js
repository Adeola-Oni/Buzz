import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageContentSide1 from './Side1'
import PageContentSide2 from './Side2'

function Content() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={9}>
                    <PageContentSide1 />
                </Col>
                <Col sm={3}>
                    <PageContentSide2 />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Content;
