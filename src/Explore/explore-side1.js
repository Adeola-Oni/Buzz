import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pic1 from '../images/images1.jpg';
import pic2 from '../images/nicki2.PNG'
import pic3 from '../images/wp.JPG'
import pic4 from '../images/img4.jpg'
import comment from '../images/comment.png'
import time from '../images/time.png'
import BBC from '../images/bbc.png'
import './explore.css';

function Exploreside1() {
  return (
    <div>
        <br/>
        <h5 style={{color: '#0F52BA'}}> | FEATURED TOPICS</h5>
        <br/>
        <section>
            <Card style={{textAlign: 'center' , width: '17rem', boxShadow: ' 0 0 5px #0F52BA'}} classname='side-card'>
                <Card.Img variant="top" src={pic1}  className='card-top-img'/>
                <Card.Body>
                    <Card.Text>
                        Three Women shot dead in front of kenelly station west inies, london.
                    </Card.Text>
                    <hr/>
                    <a style={{color:'blue'}}><img src={comment} className='special-coverage-img'/>VIEW SPECIAL COVERAGE</a>
                </Card.Body>
            </Card>

            <br/>
            <Card style={{textAlign: 'center' , width: '17rem', boxShadow: ' 0 0 5px #0F52BA'}} classname='side-card'>
                <Card.Img variant="top" src={pic2} className='card-top-img'/>
                <Card.Body>
                    <Card.Text>
                        Three Women shot dead in front of kenelly station west inies, london.
                        
                    </Card.Text>
                    <hr/>
                    <a style={{color:'blue'}}><img src={comment} className='special-coverage-img'/>VIEW SPECIAL COVERAGE</a>
                </Card.Body>
            </Card>
        </section>
    </div>
  );
}

export default Exploreside1;
