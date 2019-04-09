import React from 'react';
import {Spring} from 'react-spring';
import {
    Navbar,
    Nav, Button, NavItem, ButtonGroup, Container, Row, Col, Carousel } from 'react-bootstrap';
    import logo from '../backgroundimg/01.jpg';

    const test ={
        textAling:'center',
        fontSize:'100px',
        marginTop:'50%',
        textColor:'yellow'
    }

export default function Component1(){
    
    return (
       <div>
           <Container>
               <Row>
                   <Col><Button variant="primary">Primary</Button></Col>
               </Row>
           </Container>
     </div>
       
    )
}
