import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageContentSide1 from './explore-side1'
import PageContentSide2 from './explore-side2'

function ExploreContent() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={3}>
                    <PageContentSide1 />
                </Col>
                <Col sm={9}>
                    <PageContentSide2 />
                </Col>
                
            </Row>
        </Container>
    </div>
  );
}

export default ExploreContent;
