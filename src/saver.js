<div className="container">
<div className="row">
<div className="col-lg-12">
<Spring
from={{ opacity: 0, marginTop: -500}}
to={{opacity: 1, marginTop:0}}

from={{ opacity: 0}}
to={{opacity: 1}}

>

{ props => (
  <div style={props}>
  
  <h1 style={logoWord}>Component1</h1>
<p style={contWord}>lorem ipsusomlorem ipsusomlorem ipsus</p>
  <Spring
  from={{number:0}}
  to={{number:10}}
  config={{ duration: 10000 }}
  
  >
{props => (
  <div style={props}>
  <h1 style={counter}>
  {props.number.toFixed()}
  </h1>
  </div>
)}
  </Spring>
  </div>
) }

</Spring>



</div>
</div>
</div>


////////



<div className="container">
<div className="row">
<div className="col-lg-12">


<h1 style={comp3} >Component3</h1>
<p>lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3lorem3</p>

</div>
</div>
</div>


///////////



<div style={body}>
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      
      </div>
      </div>
      </div>
      


      /////// Nav bar

      <div style={logoHead}>
        <h3 style={logoWord}>Logo Here</h3>
        </div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Our Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Option 1</Nav.Link>
      <Nav.Link href="#pricing">Option 2</Nav.Link>
      <Nav.Link href="#features">Option 3</Nav.Link>
      <Nav.Link href="#pricing">Option 4</Nav.Link>
    </Nav>
    
    <Nav>
      <Nav.Link href="#deets">Info</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  <div className="container">
  <div className="row">
  <div className="col-lg-12">
  <h1 style={logoWord2}>Component2</h1>
<p style={logoWord2}>lorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusomlorem ipsusom</p>
  </div>
  </div>
  </div>

      

















  <Spring
from={{ opacity: 0}}
to={{opacity: 1}}
config={{ delay: 1000, duration:1000 }}

>

{ props => (
  <div style={props}>
{/* Insert below */}
<div className="container">
<div className="row">
<div className="col-lg-12">
<div style={logoHead}>
    <h3 style={logoWord}>Logo Here</h3>
</div>
</div>
</div>
</div>



  
  
  </div>
) }

</Spring>