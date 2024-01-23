import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './App.css';
import SevenStar from './img/SVG.png'
import Shield from './img/SVG (2).png'
import CarCheck from './img/SVG (1).png'
import Car1 from './img/Group 6.png'
import Car2 from './img/Group 7.png'
import Car3 from './img/Group 8.png'
import Partner1 from './img/1.png'
import Partner2 from './img/2.png'
import Partner3 from './img/3.png'
import Partner4 from './img/4.png'
import Partner5 from './img/5.png'
import Partner6 from './img/6.png'
import Partner7 from './img/11.png'
import Partner8 from './img/12.png'
import Partner9 from './img/13.png'
import Partner10 from './img/14.png'
import Partner11 from './img/15.png'
import Partner12 from './img/16.png'
import Partner13 from './img/21.png'
import Partner14 from './img/22.png'
import Partner15 from './img/23.png'
import Partner16 from './img/24.png'
import Partner17 from './img/25.png'
import Partner18 from './img/26.png'
import SellCarImg from './img/Group 9.png'



function LandingPage () {
 
  
  
  
    return (
      <>
      <div className='firstOne'>
        <div className='opopo'>
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

      <h5 className='intrdLuxeAuto'>INTRODUCING <span className='intrdLuxeAuto1'>LUXE AUTO</span></h5>
      <h1 className='discvrTheEpitome'>Discover the Epitome <br /> of Luxury Cars.</h1>
      <h3 className='explreTheExqui'>Explore our exquisite collection of the world's finest automobiles</h3>
      <div className='exploreNow'>EXPLORE NOW</div>

      <div className='gainingTrust'>
        <div style={{display:'flex', color:"white", textAlign:"left"}}>
          <img src={SevenStar} alt="" className='sevenStarImg'/>
        <h5 style={{marginTop:"10px"}}>7-day money-back promise. <br /> <span>Better than a test drive.</span></h5>
        </div>
        <div style={{display:'flex', color:"white", textAlign:"left"}}>
          <img src={Shield} alt="" className='sevenStarImg'/>
        <h5 style={{marginTop:"10px"}}>3-months warranty.<br /><span>Relax your car is covered.</span></h5>
        </div>
        <div style={{display:'flex', color:"white", textAlign:"left"}}>
          <img src={CarCheck} alt="" className='sevenStarImg'/>
        <h5 style={{marginTop:"10px"}}>Luxe-Ato checklist certified.<br /><span>Examined by experts.</span></h5>
        </div>
      </div>
      </div>
      </div>

      <div className='secondBackgrnd'>
        <div className='popop'>
      <div className='featuredCarsDivs'>
        <h1 className='featuredCars'>FEATURED CARS</h1>
        </div>
        <div className='carImgDiv'>
          <img src={Car1} alt="" className='carPriceImg'/>
          <img src={Car2} alt="" className='carPriceImg'/>
          <img src={Car3} alt="" className='carPriceImg'/>
        </div>
        </div>
        </div>
        <div className='partnersDiv'>
          <h1 style={{color:'white',marginBottom:'30px'}}><span className='luxeAutoPartners'>LUXEAUTO</span> PARTNERS</h1>
          <div className='partnerimgDiv22'>
          <div className='partnersImgDiv'>
            <img src={Partner1} alt=""  className='partnerImg'/>
            <img src={Partner2} alt=""  className='partnerImg'/>
            <img src={Partner3} alt=""  className='partnerImg'/>
            <img src={Partner4} alt=""  className='partnerImg'/>
            <img src={Partner5} alt=""  className='partnerImg'/>
            <img src={Partner6} alt=""  className='partnerImg'/>

          </div>
          <div className='partnersImgDiv'>
            <img src={Partner7} alt=""  className='partnerImg'/>
            <img src={Partner8} alt=""  className='partnerImg'/>
            <img src={Partner9} alt=""  className='partnerImg'/>
            <img src={Partner10} alt=""  className='partnerImg'/>
            <img src={Partner11} alt=""  className='partnerImg'/>
            <img src={Partner12} alt=""  className='partnerImg'/>

          </div>
          <div className='partnersImgDiv'>
            <img src={Partner13} alt=""  className='partnerImg'/>
            <img src={Partner14} alt=""  className='partnerImg'/>
            <img src={Partner15} alt=""  className='partnerImg'/>
            <img src={Partner16} alt=""  className='partnerImg'/>
            <img src={Partner17} alt=""  className='partnerImg'/>
            <img src={Partner18} alt=""  className='partnerImg'/>

          </div>
          </div>
        </div>
        <div className='sellYourLuxuryCars'>
          <div>
            <h1 className='sellYourLuxuryCarsText'>Sell Your Luxury <br /> Cars With <br /> <span className='luxeAutoPartners'>LUXEAUTO</span></h1>
            <h5 className='sellYourCarWords'>Are you a luxury car dealer or an individual <br /> looking to showcase and sell exquisite automobiles <br /> on a platform that values craftmanship and innovations? <br /> LuxeAutoChain welcomes passionate sellers who share <br /> our commitment to delivering epitome of automotive <br /> excellence. Join our exclusive network and elevate the <br /> way you present and sell luxury cars</h5>
            <div className='getStarted'>GET STARTED</div>
          </div>
          <div>
          <img src={SellCarImg} alt=""  className='sellCarImg'/>
          </div>

        </div>

        <div className='needSupportDiv'>
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
            <h6 className='oooo'>Toyota</h6>
            <h6 className='oooo'>Lexus</h6>
            <h6 className='oooo'>Subaru</h6>
            <h6 className='oooo'>Benz</h6>
            <h6 className='oooo'>Kia</h6>
            <h6 className='oooo'>Ford</h6>
          </div>
          <div>
            <h5>Popular Car Tyres</h5>
            <h6 className='oooo'>SUVs</h6>
            <h6 className='oooo'>utes</h6>
            <h6 className='oooo'>Michellin</h6>
            <h6 className='oooo'>Sedans</h6>
            <h6 className='oooo'>Coupes</h6>
            <h6 className='oooo'>Convertibles</h6>
          </div>
          <div>
            <h5>About Us</h5>
            <h6 className='oooo'>HowLuxeAuto works</h6>
            <h6 className='oooo'>Car Financing</h6>
            <h6 className='oooo'>Checklists</h6>
            <h6 className='oooo'>Careers</h6>
          </div>
          {/* <div>
            <h5>Support</h5>
            <h6 >Contacts Us</h6>
            <h6 >FAQs</h6>
          </div>
          <div>
            <h5>Follow Us</h5>
            <h6 >Facebook Us</h6>
            <h6 >Instagram</h6>
          </div> */}
          </div>

          <div className='horizontalLine'></div>

          <h5 className='longNote'>Estimated repayment based on average rate calculated across all fixed P&I used car loans offered by LUXEAUTO  <br /> preferred financials to eligible applicants purchasing a vehicle aged 0-7 years from build date. <br /> The rate does not reflect any particular product or your situation and does not imply credit is available <br /> to you at this rate. Final rate and all applicants subject to financier approval. Fees and charges apply. <br /> The direct debit frequency options available from financiers may differ.</h5>
          <h5 style={{marginTop:'10px', marginBottom:'10px', fontWeight:"300"}}>*Within Greater Sydney*</h5>
          <h5 className='NSW'>NSW MOtor Dealer's License: MD087139 NSW Motor Vehicle Repairer: MVRL59465</h5>
          <div className='Copyrighttt'>
            <h4>©2024 LUXEAUTO</h4>
            <h4>Terms and conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>



      </>
    )
    
};

export default LandingPage;