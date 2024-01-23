import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarOurMission from './img/Group 9 (1).png'
import OurValuesCar from './img/Group 10.png'
import JoinUsImg1 from './img/Frame 34.png'
import JoinUsImg2 from './img/Frame 35.png'
import { Link } from "react-router-dom";
import './App.css';

function AboutUs () {
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

      <h1 className='aboutLuxeAutos'>About LUXEAUTOS.</h1>
      <h3 className='highEndCllct'>A high end collections of the world's finest automobiles</h3>
        </div>
       
        <div className="SecondBacgrdAbouUs">
            <h2 className="LuxeAutoChain">At LuxeAutoChain, we redefine the automotive experience by seamlessly integrating the world of luxury cars with cutting-edge blockchain technology. Our passion for excellence drives us to curate an unparalleled collection of the finest automobiles, ensuring that every vehicle in our inventory is a testament to both opulence and performance.</h2>
        </div>
      
        <div className='OurMissionCars'>
          <div>
          <h5 className='OurMissionWords'>Elevating Expectations, Redefining Luxury.</h5>
            <h1 className='ourMissionPartners'>OUR MISSION</h1>
            <h5 className='sellYourCarWords'>At the core of LuxeAutos is a mission to exceed <br /> expectations and redefine the essence of luxury <br /> in the automotive industry. We believe that the <br /> journey to acquiring a luxury car should be as exceptional as <br /> the vehicles themselves</h5>
          </div>
          <div>
          <img src={CarOurMission} alt=""  className='ourMissionCarImg'/>
          </div>

        </div>
        <div className="divOfBoxes">
            <div></div>
            <div style={{display:'grid',gap:'20px'}}>
            <div className="box1">
            <h1 className='TransparencyWord'>Our Values</h1>
            <img src={OurValuesCar} alt="" className="ourValCarImg" />
                </div>
         <div className="box1">
            <h1 className='TransparencyWord'>Transparency in Every Transaction</h1>
                <h5 className="TransparencyWord1">Blockchain technology lies at the heart of our commitment to transparency. We leverage the power of blockchain to ensure that every transaction is secure, verifiable, and conducted with the utmost transparency, providing our customers with confidence and peace of mind.</h5>
                </div>
         </div>
          <div style={{display:'grid',gap:'20px'}}>
          <div className="box1">
            <h1 className='TransparencyWord'>Quality Beyond Compare:</h1>
                <h5 className="TransparencyWord1">We are uncompromising when it comes to the quality of the cars we offer. Each vehicle in our collection undergoes rigorous inspections and meets the highest standards of craftsmanship and performance.</h5>
                </div>
         <div className="box1">
            <h1 className='TransparencyWord'>Customer-Centric Approach:</h1>
                <h5 className="TransparencyWord1">At LuxeAuto, we prioritize our customers at every step. From the moment you explore our collection to the final blockchain-backed transaction, our customer-centric approach ensures a seamless and delightful experience.</h5>
                </div>
                </div>
        </div>
        <div className="JoinUsImgDiv">
            <img src={JoinUsImg1} alt="" className="JoinUSSiMg" />
            <img src={JoinUsImg2} alt="" className="JoinUsImg"/>
        </div>
        <div className="SeasonedLuxury">
        <h5 className="SeasonedLuxuryText">Whether you're a seasoned luxury car enthusiast or a first-time buyer, LuxeAuto invites you to join us on this extraordinary journey. Explore our collection, experience the innovation of blockchain-backed transactions, and elevate your expectations of what a luxury car dealership can be.</h5>
        </div>
        
        <div className='needSupportDivAboutUs'>
        <div className='exploreNow' style={{marginBottom:'20px'}}>EXPLORE NOW</div>
          <h1 className='needSupportWord1'>Need Support? We are here to help</h1>
          <h4 className='needSupportWord2'>Mon-Fri: 8AM-8PM AEDT, Sat-Sun: 9AM-6PM AEDT </h4>
          <div className='contactDivFlex'>
          <div className='contactDiv'>
            <div style={{marginTop:'15px', marginRight:'10px'}}>
            <i class="fa-regular fa-envelope fa-2xl"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <h5>Email</h5>
              <h6 style={{textDecoration:"underline"}}>LuxeAuto01@hotmail.com</h6>
            </div>
          </div>
          <div className='contactDiv'>
            <div style={{marginTop:'15px', marginRight:'10px'}}>
            <i class="fa-solid fa-phone-volume fa-flip-horizontal fa-2xl"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <h5>Call Us</h5>
              <h6 style={{textDecoration:"underline"}}>02 8319 0933</h6>
            </div>
          </div>
          <div className='contactDiv'>
            <div style={{marginTop:'15px', marginRight:'10px'}}>
            <i class="fa-regular fa-comment fa-2xl"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <h5>Text</h5>
              <h6 style={{textDecoration:"underline"}}>089 2451 0721</h6>
            </div>
          </div>
          </div>
          <div className='horizontalLine'></div>
          <div className='thingsWeDo'>
          <div>
            <h5>Popular Maker</h5>
            <h6>Toyotal</h6>
            <h6>Lexus</h6>
            <h6>Subaru</h6>
            <h6>Benz</h6>
            <h6>Kia</h6>
            <h6>Ford</h6>
          </div>
          <div>
            <h5>Popular Car Tyres</h5>
            <h6>SUVs</h6>
            <h6>utes</h6>
            <h6>Michellin</h6>
            <h6>Sedans</h6>
            <h6>Coupes</h6>
            <h6>Convertibles</h6>
          </div>
          <div>
            <h5>About Us</h5>
            <h6>HowLuxeAuto works</h6>
            <h6>Car Financing</h6>
            <h6>Checklists</h6>
            <h6>Careers</h6>
          </div>
          {/* <div>
            <h5>Support</h5>
            <h6>Contacts Us</h6>
            <h6>FAQs</h6>
          </div>
          <div>
            <h5>Follow Us</h5>
            <h6>Facebook Us</h6>
            <h6>Instagram</h6>
          </div> */}
          </div>

          <div className='horizontalLine'></div>

          <h5 className='longNote'>Estimated repayment based on average rate calculated across all fixed P&I used car loans offered by LUXEAUTO preferred financials <br /> to eligible applicants purchasing a vehicle aged 0-7 years from build date. The rate does not reflect any particular product or your <br /> situation and does not imply credit is available to you at this rate. Final rate and all applicants subject to financier approval. <br /> Fees and charges apply. The direct debit frequency options available from financiers may differ.</h5>
          <h5 style={{marginTop:'10px', marginBottom:'10px', fontWeight:"300"}}>*Within Greater Sydney*</h5>
          <h5>NSW MOtor Dealer's License: MD087139 NSW Motor Vehicle Repairer: MVRL59465</h5>
          <div className='Copyrighttt'>
            <h4>©2024 LUXEAUTO</h4>
            <h4>Terms and conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
        </>
    )
}

export default AboutUs;