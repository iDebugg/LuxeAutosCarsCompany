import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './App.css';

function ContactUs () {
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
              
            <button className='connectWalletBtn' ><Link className='connectWalletBtn1' to={"/ConnectWallet"}>CONNECT WALLET</Link></button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className='aboutLuxeAutos'>CONTACT US.</h1>
      <h3 className='highEndCllct'>A high end collections of the world's finest automobiles</h3>
        </div>
  
  
       
        
        <div className='wedLoveToHear'>
            <h1 className="wedLoveToHearText">We'd love to hear from you</h1>
            <h5 className="wedLoveToHearText1">Connect with Excellence. Get in touch with LuxeAutoChain and experience <br />  the epitome of luxury and innovation. Your dream car journey awaits <br /> let's make it a reality together.</h5>
        <div className="welovedtoheardiv">
            <div>
                <input type="text" placeholder="Name" id="Name" className="FullName" required/> <input type="number" placeholder="Ticket ID" id="ticketID" className="TicId" required/> <br />
                <input type="text" placeholder="Subject" id="Sbjt" className="Subject"  required/> <br />
                <input type="text" placeholder="Message" id="Mssge" className="Subject"  required/>
            </div>
            

            <div className='contactDivFlex2'>
          <div className="contactDiv2">
            <div style={{marginTop:'15px', marginRight:'10px'}}>
            <i class="fa-regular fa-envelope fa-2xl"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <h5 className="contactInnfo">Email</h5>
              <h6 style={{textDecoration:"underline"}}>LuxeAuto01@hotmail.com</h6>
            </div>
          </div>
          <div className='contactDiv2'>
            <div style={{marginTop:'15px', marginRight:'10px'}}>
            <i class="fa-solid fa-phone-volume fa-flip-horizontal fa-2xl"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <h5 className="contactInnfo">Call Us</h5>
              <h6 style={{textDecoration:"underline"}}>02 8319 0933</h6>
            </div>
          </div>
          <div className='contactDiv2'>
            <div style={{marginTop:'15px', marginRight:'10px'}}>
            <i class="fa-regular fa-comment fa-2xl"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <h5 className="contactInnfo">Text</h5>
              <h6 style={{textDecoration:"underline"}}>089 2451 0721</h6>
            </div>
          </div>
          </div>
  
          </div>
         
   </div>
        </>
    )
}

export default ContactUs;