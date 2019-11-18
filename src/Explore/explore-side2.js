import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pic1 from '../images/images1.jpg';
import pic2 from '../images/nicki2.PNG'
import pic3 from '../images/wp.JPG'
import pic4 from '../images/img4.jpg'
import comment from '../images/comment.png'
import time from '../images/time.png'
import BBC from '../images/bbc.png'
import SKY from '../images/sky.png'
import tasty from '../images/tasty.jpg'

import './explore.css';

function Exploreside2() {
  return (
    <div>
        <br/>
        <h5 style={{color: '#0F52BA', textAlign:'left',}}> | POPULAR CHANNELS <t/> 
        <img src={comment} className='special-coverage-img2'/>VIEW SPECIAL COVERAGE</h5>
        <div style={{padding: '3%', color: 'black'}} >
            <div style={{Align: 'center'}}>
                <Row>
                    <Col sm={4} >
                        <br/>
                        <img src={BBC} className='side-card-img' fluid style={{alignSelf:'center'}}/>
                        <p className='text-side-img'>Three Women shot dead in front of kenelly station west inies, london.</p>
                        <p><b>95K people added</b></p>
                        <Button  className='big-button' size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center',
                         padding:'1%', backgroundColor:'transparent', boxShadow: ' 0 0 10px #fa8072', border:'1px solid #fa8072'}}>
                            ADD
                        </Button>
                        <br/>
                    </Col>
                    <Col sm={4} >
                        <br/>
                        <img src={tasty} className='side-card-img' fluid style={{alignSelf:'center'}}/>
                        <p  className='text-side-img'>Three Women shot dead in front of kenelly station west inies, london.</p>
                        <p><b>95K people added</b></p>
                        <Button className='big-button' size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center', padding:'1%', 
                        backgroundColor:'transparent', boxShadow: ' 0 0 10px #fa8072', border:'1px solid #fa8072'}}>
                            ADD
                        </Button>
                        <br/>
                    </Col>
                    <Col sm={4} >
                        <br/>
                        <img src={SKY} className='side-card-img' fluid style={{alignSelf:'center'}}/>
                        <p  className='text-side-img'>Three Women shot dead in front of kenelly station west inies, london.</p>
                        <p><b>95K people added</b></p>
                        <Button className='big-button' size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center', padding:'1%', 
                        backgroundColor:'transparent', boxShadow: ' 0 0 10px #fa8072', border:'1px solid #fa8072'}}>
                            ADD
                        </Button>
                        <br/>
                    </Col>
                </Row> 
            </div>
        </div>

        <br/><br/>
        <h5 style={{color: '#0F52BA', textAlign:'left',}} > | BUZZ WORTHY </h5><br/>
        <Card style={{padding: '1%', color: 'black', alignItems:'center'}} className='follow-card'>
            <br/>
            <Row>
                <Col sm={3}> <img src={BBC} className='side-card-img' fluid style={{alignSelf:'center'}}/> CNN</Col>
                <Col sm={3}>255K Followers</Col>
                <Col sm={3}>271K Posts</Col>
                <Col sm={3}>
                    <Button className='big-button' size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center', padding:'1%', 
                    backgroundColor:'transparent', boxShadow: ' 0 0 10px #fa8072', border:'1px solid #fa8072'}}>
                        FOLLOW
                    </Button>
                </Col>
                
            </Row>
            <div style={{ width: '30rem'}}>
                <br/>
                <Card style={{ width: '20rem', float:'left'}}>
                    <Card.Body>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src={pic4} />
                </Card>
                <div style={{textAlign:'left'}}>
                    <p><img src={time}/>  2:56pm</p>
                    <p><img src={comment}/>  236</p>
                </div>
            </div>
            <br/>
        </Card>
        <br/><br/><br/>
    </div>
  );
}

export default Exploreside2;
