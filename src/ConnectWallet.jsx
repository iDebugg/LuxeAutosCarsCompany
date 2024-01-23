import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './App.css';

function ConnectWallet () {
    return (
        <>
        <div className="ContctUsNavBg">
            <Navbar collapseOnSelect expand="lg" className="bg-body-dark OriNavBar">
        <Container>
          <Navbar.Brand href="#home" className='companyName me-5'>LUXE <br /> AUTOS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><Link className="ms-5 navOptions" to={"/LandingPage"}>HOME</Link></Nav.Link>
              <Nav.Link><Link className="ms-5 navOptions" to={"/AboutUs"}>ABOUT US</Link></Nav.Link>
              <Nav.Link><Link className="ms-5 navOptions" to={"/HowItWorks"}>HOW IT WORKS</Link></Nav.Link>
              <Nav.Link><Link className="ms-5 navOptions" to={"/ContactUs"}>CONTACT US</Link></Nav.Link>
              
            </Nav>
            <Nav>
              
              <button className='connectWalletBtn'>CONNECT WALLET</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className='aboutLuxeAutos'>CONNECT WALLET.</h1>
      <h3 className='highEndCllct'>A high end collections of the world's finest automobiles</h3>
        </div>
  
  
       
        
        <div className='wedLoveToHear'>
            <h1 className="wedLoveToHearText">Create Wallet</h1>
            <h5 className="wedLoveToHearText1">Connect with Excellence. Get in touch with LuxeAutoChain <br /> and experience the epitome of luxury and innovation. Your <br /> dream car journey awaits – let's make it a reality together.</h5>
        <div style={{display:"flex"}}>
            <div>
                <input type="text" placeholder="Name" id="Name" className="FullName" required/> <br />
                <input type="text" placeholder="Subject" id="Sbjt" className="Subject1"  required/> <br />
                <input type="text" placeholder="Message" id="Mssge" className="Subject1"  required/>
            </div>
            

           
  
          </div>
         
   </div>
        </>
    )
};

export default ConnectWallet;