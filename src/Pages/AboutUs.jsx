import React from 'react'
import { Button, Card, Container, Row, Col } from "reactstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/chatbot';
import AboutCSS from '../assets/css/about.css'

// require('../images/HeadShot.png');

function AboutUs() {
  return (
    <div>
        <Header />
      <main className="profile-page" >
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <h1 className='about-h1'>Mission Statement</h1>
            <h5 id='aboutText'>At iSummarize, our mission is to empower individuals and organizations to unlock the full potential of information by providing cutting-edge summarization solutions. We are committed to simplifying complex content, fostering clarity, and accelerating comprehension. By harnessing the power of artificial intelligence and innovative technologies, we strive to streamline information consumption, enhance productivity, and enable informed decision-making. Our goal is to revolutionize the way people engage with and extract value from vast amounts of data, ensuring that knowledge is accessible, actionable, and transformative for all.
</h5>
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section id="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4 aboutCard">
                  <Row className="justify-content-center">
                    <h2 id='MTTText'>Meet the team</h2>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="4" xs='8'>
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className='about-img'
                            // className="rounded-circle"
                            src={require('../images/HeadShot2.png')}
                          />
                        </a>
                        
                      </div>
                      <div className='PPText'>   
                          <p className="heading text-center "> Oscar Silva <br /> (co-founder)</p>
                          </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right "
                      lg="4"
                    >
                      <Row>
                      <div className="card-profile-image center">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className='about-img'
                            // className="rounded-circle"
                            src={require('../images/HeadShot3.png')}
                          />
                        </a>
                        <div className='PPText mt-9'>   
                          <p className="heading text-center ">Jaylin Ceja <br /> (co-founder)</p>
                          </div>
                      </div>
                      
                    </Row>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                    <section id='profileSect'>

                        <Row>
                            <div className="card-profile-image center">

                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className='about-img'
                            // className="rounded-circle"
                            src={require('../images/HeadShot.png')}
                          />
                            </a>
                            </div>
                             <div className='PPText'>   
                          <p className="heading text-center">Keyondre Sincere Baxter <br /> (co-founder)</p>
                          </div>
                        </Row>
                       
                          </section>
                    </Col>
                  </Row>
                  
                </div>
              </Card>
            </Container>
          </section>
          <Chatbot />

        </main>
        <Footer />
    </div>
  )
}

export default AboutUs
