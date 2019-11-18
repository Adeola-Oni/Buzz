import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExploreSide1 from './explore-side1'
import ExploreSide2 from './explore-side2'

function ExploreContent() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={3}>
                    <ExploreSide1 />
                </Col>
                <Col sm={9}>
                    <ExploreSide2 />
                </Col>
                
            </Row>
        </Container>
    </div>
  );
}

export default ExploreContent;
