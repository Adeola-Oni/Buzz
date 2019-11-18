import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageContentSide1 from './Side1'
import PageContentSide2 from './Side2'

function Content() {
  return (
    <div>
        <Container>
            <Row>
                <Col md={8}>
                    <PageContentSide1 />
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                    <PageContentSide2 />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Content;
