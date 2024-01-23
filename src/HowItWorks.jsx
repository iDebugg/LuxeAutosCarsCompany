import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import HowItWorksTop from './img/Crypto-14.png'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function HowItWorks () {
    return (
        <>
        <div className="secondOne">
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

      <div className='HowItWorksTop'>
          <div>
            <h1 className='ourMissionPartners'>How LUXEATUOS works</h1>
            <h5 className='HowLUXEAUTOSWorksrWords'>Discover the seamless and innovative process that sets LuxeAuto apart. <br /> From browsing our curated collection to finalizing a secure blockchain- <br />backed transaction, our platform is designed to redefine the luxury car <br /> buying and selling experience.</h5>
          </div>
          <div>
          <img src={HowItWorksTop} alt=""  className='HowItWorksTopCarImg'/>
          </div>

        </div> </div>
        <div className="HowLUXEAUTOSWorks">
            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">1</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Explore our Curated Collection</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>

            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">2</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Connect Your Wallet</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>

            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">3</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Immerse in Transparent Transactions</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>
            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">4</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Secure Your Dream Car</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>
            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">5</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Become a LuxeAuto Seller</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>
            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">6</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Personalized Seller Dashboard</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>
            <div className="HowLUXEAUTOSWorks2">
            <div className="OneNumBox">
                <h1 className="firstBox">7</h1>
            </div>
            <div className="OneBox">
                <h1 className="firstBox">Join the LuxeAuto Community</h1>
            </div>
            <div className="OneNumBox">
                <h1 className="firstBox"><i class="fa-solid fa-chevron-down"></i></h1>
            </div>
            </div>
            
     
            
         </div>
       
        </>
    )
}

export default HowItWorks;