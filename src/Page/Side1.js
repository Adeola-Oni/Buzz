import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import pic1 from '../images/images1.jpg';
import pic2 from '../images/nicki2.PNG'
import pic3 from '../images/wp.JPG'
import pic4 from '../images/img4.jpg'
import comment from '../images/comment.png'
import time from '../images/time.png'
import BBC from '../images/bbc.png'
import './Side.css';

function Content() {
  return (
    <div>
        <br/>
        <section>
            <div style={{Align: 'center'}}>
                <h6 style={{textAlign: 'left'}}>Text Describing Images/Story</h6>
                <Container>
                    <Row>
                        <Col sm={4} className='pic1 box'></Col>
                        <Col sm={4} className='pic2 box'></Col>
                        <Col sm={4} className='pic3 box'></Col>
                    </Row>
                    <br/>
                    <ul>
                        <li><img src={BBC} style={{width:'10%', borderRadius: '50%'}}/> New York post</li>
                        <li><img src={comment}/> 236</li>
                        <li><img src={time}/> 2:56pm</li>
                    </ul>  
                </Container>
            </div>
            <br/><br/>
        </section>
        <br/><br/>
        <section>
            
            <div style={{Align: 'center'}}>
                <Container>
                    <Row>
                        <Col sm={6} style={{textAlign:'left'}}><h6>Text Describing Story</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident.</p></Col>
                        <Col sm={6} className='pic4 box'></Col>
                    </Row>
                    <br/>
                    <ul>
                        <li><img src={BBC} style={{width:'10%', borderRadius: '50%'}}/> New York post</li>
                        <li><img src={comment}/> 236</li>
                        <li><img src={time}/> 2:56pm</li>
                    </ul>
                </Container>
            </div>
        </section>
    </div>
  );
}

export default Content;
