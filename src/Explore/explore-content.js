import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExploreSide1 from './explore-side1'
import ExploreSide2 from './explore-side2'

function ExploreContent() {
  return (
    <div>
        <Container>
            <Row>
                <Col md={3}>
                    <ExploreSide1 />
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <ExploreSide2 />
                </Col>
                
            </Row>
        </Container>
    </div>
  );
}

export default ExploreContent;
