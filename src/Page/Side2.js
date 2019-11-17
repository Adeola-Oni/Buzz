import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BBCimg from '../images/bbc.png'
import Tasty from '../images/tasty.jpg'
import './Side.css';
import Sky from '../images/sky.png'

function Content() {
  return (
    <div>
        <br/>
        <section>
            <Card style={{textAlign: 'center' }} className='follow-card'>
                <br/>
                <img src={BBCimg} className='side-card-img' style={{alignSelf:'center'}}/>
                <br/>
                <p>BBC</p>
                <Button  size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center', padding:'1%', backgroundColor:'transparent'}}>
                    Follow
                </Button>
                <br/>
            </Card>
            <br/>
            <Card style={{textAlign: 'center' }} className='follow-card'>
                <br/>
                <img src={Tasty} className='side-card-img' style={{alignSelf:'center'}}/>
                <br/>
                <p>BBC</p>
                <Button  size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center', padding:'1%', backgroundColor:'transparent'}}>
                    Follow
                </Button>
                <br/>
            </Card>
            <br/>
            <Card style={{textAlign: 'center' }} className='follow-card'>
                <br/>
                <img src={Sky} className='side-card-img' style={{alignSelf:'center'}}/>
                <br/>
                <p>SKY</p>
                <Button  size="sm" style={{fontSize: '90%', width: '70%', color: 'black', alignSelf:'center', padding:'1%', backgroundColor:'transparent'}}>
                    Follow
                </Button>
                <br/>
            </Card>
            
            {/* <Card className='side-card'>
                <Card.Img variant="top" src={BBCimg} className='side-card-img'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card> */}
            <br/>
        </section>
    </div>
  );
}

export default Content;
