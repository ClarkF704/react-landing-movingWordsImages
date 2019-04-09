// Hello,
// In order to get the landing page to move/look like its suppose to, please insert the following links in the index.html head tag
// Bootstrap ------>
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>


import React, { Component } from 'react';
import {
  Navbar,
  Nav, Button, ButtonGroup, Container, Row, Col, } from 'react-bootstrap';
  import { Spring } from  'react-spring/renderprops';
  import welcome from './components/component1';
import sliderImg1 from './backgroundimg/01.jpg';
import sliderImg2 from './backgroundimg/02.jpg';
import sliderImg3 from './backgroundimg/03.jpg';
import sliderImg4 from './backgroundimg/04.jpg';
import sliderImg5 from './backgroundimg/05.jpg';
import logo from './img/sch.png';
import BackgroundSlideshow from 'react-background-slideshow';
import ReactTextRotator from 'react-text-rotator';
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';


class App extends Component {

  render() {
    const width = 'auto', height='auto';
const Children  = styled.div`
  
  overflow: visible;
  width: ${width};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  
  text-align: center;
  width: 100%;
  
`;
const dotz = {
  textAlign:'center',
  marginTop:'400px'
}

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
    <div style={dotz}>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
    </div>
    
  </Container>
);
const Carousel = makeCarousel(CarouselUI);
    //js objects
    const headers1 = [
      {
        text:'INFO',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 2',
        className:'secHeader',
        animation:'fade'
      },
      {
        text:'MORE info 3',
        className:'thirdHeader',
        animation:'fade'
      },
      {
        text:'MORE info 4',
        className:'fourthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 5 ',
        className:'fifthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 6',
        className:'firstHeader',
        animation:'fade'
      },
    ]
    // Header slide 2
    const headers2 = [
      
      {
        text:'MORE info 2',
        className:'secHeader',
        animation:'fade'
      },
      {
        text:'MORE info 3',
        className:'thirdHeader',
        animation:'fade'
      },
      {
        text:'MORE info 4',
        className:'fourthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 5',
        className:'fifthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 6',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 1',
        className:'firstHeader',
        animation:'fade'
      },
    ]
    // Headers 3

    const headers3 = [
      
      {
        text:'MORE info 3',
        className:'thirdHeader',
        animation:'fade'
      },
      {
        text:'MORE info 4',
        className:'fourthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 5',
        className:'fifthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 6',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 1',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 2',
        className:'secHeader',
        animation:'fade'
      },
    ]

    // Headers 4 

    const headers4 = [
      
      {
        text:'MORE info 4',
        className:'fourthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 5',
        className:'fifthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 6',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'Welcome',
        className:'MORE info 1',
        animation:'fade'
      },
      {
        text:'MORE info 2',
        className:'secHeader',
        animation:'fade'
      },
      {
        text:'MORE info 3',
        className:'thirdHeader',
        animation:'fade'
      },
    ]

    //Headers 5

    const headers5 = [
      
      {
        text:'MORE info 5',
        className:'fifthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 6',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 1',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 2',
        className:'secHeader',
        animation:'fade'
      },
      {
        text:'MORE info 3',
        className:'thirdHeader',
        animation:'fade'
      },
      {
        text:'MORE info 4',
        className:'fourthHeader',
        animation:'fade'
      },
    ]

    //Headers 6

    const headers6 = [
      
      {
        text:'MORE info 6',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 1',
        className:'firstHeader',
        animation:'fade'
      },
      {
        text:'MORE info 2',
        className:'secHeader',
        animation:'fade'
      },
      {
        text:'MORE info 3',
        className:'thirdHeader',
        animation:'fade'
      },
      {
        text:'MORE info 4',
        className:'fourthHeader',
        animation:'fade'
      },
      {
        text:'MORE info 5',
        className:'fifthHeader',
        animation:'fade'
      },
    ]
// Info slide 1
    const content1 = [
      {
        text: 'Content 1',
        className: 'classA',
        animation: 'fade',
      },
      {
        text: 'Content 2',
        className: 'classB',
        animation: 'fade',
      },
      {
        text: 'Content 3',
        className: 'classC',
        animation: 'fade',
      },
      {
        text: 'Content 4',
        className: 'classD',
        animation: 'fade',
      },
      {
        text: 'Content 5',
        className: 'classE',
        animation: 'fade',
      },
      {
        text: 'Content 6',
        className: 'classE',
        animation: 'fade',
        
      }
    ];

    //Info slide 2

    const content2 = [
    
      {
        text: 'Content 2',
        className: 'classB',
        animation: 'fade',
      },
      {
        text: 'Content 3',
        className: 'classC',
        animation: 'fade',
      },
      {
        text: 'Content 4',
        className: 'classD',
        animation: 'fade',
      },
      {
        text: 'Content 5',
        className: 'classE',
        animation: 'fade',
      },
      {
        text: 'Content 6',
        className: 'classE',
        animation: 'fade',
        
      },
      {
        text: 'Content 1',
        className: 'classA',
        animation: 'fade',
      },
    ];

    //Info Slide 3

    const content3 = [
    
    
      {
        text: 'Content 3',
        className: 'classC',
        animation: 'fade',
      },
      {
        text: 'Content 4',
        className: 'classD',
        animation: 'fade',
      },
      {
        text: 'Content 5',
        className: 'classE',
        animation: 'fade',
      },
      {
        text: 'Content 6',
        className: 'classE',
        animation: 'fade',
        
      },
      {
        text: 'Content 1',
        className: 'classA',
        animation: 'fade',
      },
      {
        text: 'Content 2',
        className: 'classB',
        animation: 'fade',
      },
    ];

    //Info slide 4

    const content4 = [
    
      {
        text: 'Content 4',
        className: 'classD',
        animation: 'fade',
      },
      {
        text: 'Content 5',
        className: 'classE',
        animation: 'fade',
      },
      {
        text: 'Content 6',
        className: 'classE',
        animation: 'fade',
        
      },
      {
        text: 'Content 1',
        className: 'classA',
        animation: 'fade',
      },
      {
        text: 'Content 2',
        className: 'classB',
        animation: 'fade',
      },
      {
        text: 'Content 3',
        className: 'classC',
        animation: 'fade',
      },
    ];
//Info slide 5
    const content5 = [
    

      {
        text: 'Content 5',
        className: 'classE',
        animation: 'fade',
      },
      {
        text: 'Content 6',
        className: 'classE',
        animation: 'fade',
        
      },
      {
        text: 'Content 1',
        className: 'classA',
        animation: 'fade',
      },
      {
        text: 'Content 2',
        className: 'classB',
        animation: 'fade',
      },
      {
        text: 'Content 3',
        className: 'classC',
        animation: 'fade',
      },
      {
        text: 'Content 4',
        className: 'classD',
        animation: 'fade',
      },
    ];

    //Info 6

    const content6 = [

      {
        text: 'Content 6',
        className: 'classE',
        animation: 'fade',
        
      },
      {
        text: 'Content 1',
        className: 'classA',
        animation: 'fade',
      },
      {
        text: 'Content 2',
        className: 'classB',
        animation: 'fade',
      },
      {
        text: 'Content 3',
        className: 'classC',
        animation: 'fade',
      },
      {
        text: 'Content 4',
        className: 'classD',
        animation: 'fade',
      },
      {
        text: 'Content 5',
        className: 'classE',
        animation: 'fade',
      },
    ];




  //  js Styles

const slideShow = {
  position: 'absolute',
  width:'100%',
  height:'auto'
}
const logoStyle = {
  width:'200px',
  height:'auto',
}
const align = {
  textAlign:'center',
  position: 'relative'
}
const navBar ={}

const h1Edit = {
  fontSize:'55px',
  position:'relative',
  color:'white',
  marginRight:'20px',
  textAlign:'center',
  fontFamily:'cursive'
}
const infoSlide = {
  fontSize: '17px',
  textAlign:'center',
  color:'black',
  fontFamily:'cursive'
}
const infoz = {
  fontSize: '40px',
  textAlign:'center',
  color:'black',
  fontFamily:'cursive'
}
const buttonz = {
  textAlign:'center',
  marginTop:'15px',
  fontFamily:'cursive',
}
const navSty = {
  fontFamily:'cursive'
}
    return (
<div>
{/* Background */}
<Spring
        from={{ opacity: 0.8}}
        to={{opacity: 1}}
        config={{ delay: 100, duration:100000000000000000000000000000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <div>
        <BackgroundSlideshow style={slideShow} images={[ sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5 ]} />
          </div>

          </div>
        ) }
          </Spring>


          {/* Navbar */}

        <div style={navBar}>
          <Spring
            from={{ opacity: 0, marginTop:-500}}
            to={{opacity: 1, marginTop:0 }}
            config={{ delay: 200, duration:1000 }}
            >
            { props => (
              <div style={props}>
                {/* Insert below */}
                <div style={navSty}>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="#home">
                        <img
                          src={logo}
                          width="90"
                          height="auto"
                          className="d-inline-block align-top"
                          alt="Bike logo"
                        />
                      </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="#"></Nav.Link>
                        <Nav.Link href="#"></Nav.Link>

                      </Nav>
                      <Nav>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                          Live
                        </Nav.Link>
                        <Nav.Link href="#">Media</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                          Location
                        </Nav.Link>
                        <Nav.Link href="#">Fitness</Nav.Link>
                        <Nav.Link href="#">Diet</Nav.Link>
                        <Nav.Item>
                        <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="light">Donate</Button>
                    </ButtonGroup>
                    </Nav.Item>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                    </div>
                    </div>
                  ) }
                  </Spring>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
<Container>
  <Row>
    <Col>
    <Carousel defaultWait={11000} maxTurns={500000000}>
    <Slide right>
    {/* Slide 1 */}
    
      <div>
      <Spring
        from={{ opacity: 0, marginLeft:-500}}
        to={{opacity: 1, marginLeft:0}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={h1Edit}>
            <Col><ReactTextRotator 
                  content={headers1}
                  time={11000}
                  startDelay={0}
            /></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0}}
        to={{opacity: 1}}
        config={{ delay: 2500, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col>
            <div style={align}>
        <img src={logo} style={logoStyle} />
          </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={infoSlide}>
              <ReactTextRotator
              content={content1}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
{/* Buttons */}
<Spring
        from={{ opacity: 0, marginBottom:-500}}
        to={{opacity: 1, marginBottom:0}}
        config={{ delay: 2600, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={buttonz}>
            <Col><Button variant="light">Button</Button></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>
      </div>
    </Slide>
    <Slide right>
      <div>
        {/* Slide 2 */}
        <Spring
        from={{ opacity: 0, marginLeft:-500}}
        to={{opacity: 1, marginLeft:0}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={h1Edit}>
            <Col><ReactTextRotator 
                  content={headers2}
                  time={11000}
                  startDelay={0}
            /></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={infoSlide}>
              <ReactTextRotator
              content={content2}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={h1Edit}>
              <ReactTextRotator
              content={welcome}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
{/* Buttons */}
<Spring
        from={{ opacity: 0, marginBottom:-500}}
        to={{opacity: 1, marginBottom:0}}
        config={{ delay: 2600, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={buttonz}>
            <Col><Button variant="primary">Button</Button></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>

      
      </div>
    </Slide>
    <Slide right>
      <div>
        {/* Slide 3 */}
        <Spring
        from={{ opacity: 0, marginLeft:-500}}
        to={{opacity: 1, marginLeft:0}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={h1Edit}>
            <Col><ReactTextRotator 
                  content={headers3}
                  time={11000}
                  startDelay={0}
            /></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={infoSlide}>
              <ReactTextRotator
              content={content3}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={h1Edit}>
              <ReactTextRotator
              content={welcome}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
{/* Buttons */}
<Spring
        from={{ opacity: 0, marginBottom:-500}}
        to={{opacity: 1, marginBottom:0}}
        config={{ delay: 2600, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={buttonz}>
            <Col><Button variant="primary">Button</Button></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>

      </div>
    </Slide>
    <Slide right>
      <div>
        {/* Slide 4 */}
        <Spring
        from={{ opacity: 0, marginLeft:-500}}
        to={{opacity: 1, marginLeft:0}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={h1Edit}>
            <Col><ReactTextRotator 
                  content={headers4}
                  time={11000}
                  startDelay={0}
            /></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={infoSlide}>
              <ReactTextRotator
              content={content4}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={h1Edit}>
              <ReactTextRotator
              content={welcome}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
{/* Buttons */}
<Spring
        from={{ opacity: 0, marginBottom:-500}}
        to={{opacity: 1, marginBottom:0}}
        config={{ delay: 2600, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={buttonz}>
            <Col><Button variant="dark">Button</Button></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>
      </div>
    </Slide>
    <Slide right>
      <div>
        {/* Slide 5 */}
        <Spring
        from={{ opacity: 0, marginLeft:-500}}
        to={{opacity: 1, marginLeft:0}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={h1Edit}>
            <Col><ReactTextRotator 
                  content={headers5}
                  time={11000}
                  startDelay={0}
            /></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={infoSlide}>
              <ReactTextRotator
              content={content5}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={h1Edit}>
              <ReactTextRotator
              content={welcome}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
{/* Buttons */}
<Spring
        from={{ opacity: 0, marginBottom:-500}}
        to={{opacity: 1, marginBottom:0}}
        config={{ delay: 2600, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={buttonz}>
            <Col><Button variant="dark">Button</Button></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>
      </div>
    </Slide>
    <Slide right>
      <div>
        {/* Slide 6 */}
        <Spring
        from={{ opacity: 0, marginLeft:-500}}
        to={{opacity: 1, marginLeft:0}}
        config={{ delay: 1000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={h1Edit}>
            <Col><ReactTextRotator 
                  content={headers6}
                  time={11000}
                  startDelay={0}
            /></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={infoSlide}>
              <ReactTextRotator
              content={content6}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
          <Spring
        from={{ opacity: 0, marginRight:-500}}
        to={{opacity: 1, marginRight:0}}
        config={{ delay: 2000, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
            <Col><div style={h1Edit}>
              <ReactTextRotator
              content={welcome}
              time={11000}
              startDelay={0}
              />
          </div>
          </Col>
          <Col></Col>
        </Row>
    </Container>
          </div>
        ) }
          </Spring>
{/* Buttons */}
<Spring
        from={{ opacity: 0, marginBottom:-500}}
        to={{opacity: 1, marginBottom:0}}
        config={{ delay: 2600, duration:1000 }}
        >
        { props => (
          <div style={props}>
        {/* Insert below */}
        <Container>
          <Row>
            <Col></Col>
              <div style={buttonz}>
            <Col><Button variant="dark">Button</Button></Col>
              </div>
            <Col></Col>
          </Row>
        </Container>

          </div>
        ) }
          </Spring>
      </div>
    </Slide>
  </Carousel>
    </Col>
  </Row>
</Container>
        </div>
    )
  }
}


export default App
