import React from 'react'
import { Button, Card, Container, Row, Col } from "reactstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/chatbot';

// require('../images/HeadShot.png');

function AboutUs() {
  return (
    <div>
        <Header />
      <main className="profile-page" >
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="4">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require('../images/HeadShot2.png')}
                          />
                        </a>
                      </div>
                      <Row className='PPText'>   
                          <p className="heading "><span>......................</span> Oscar Silva</p>
                          </Row>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right "
                      lg="4"
                    >
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require('../images/HeadShot3.png')}
                          />
                        </a>
                      </div>
                      <Row className='PPText'>   
                          <p className="heading "><span>...................</span> Jaylin Ceja</p>
                          </Row>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                    <section id='profileSect'>

                        <Row>
                            <div className="card-profile-image">

                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require('../images/HeadShot.png')}
                          />
                            </a>
                            </div>
                        </Row>
                        <Row className='PPText'>   
                          <p className="heading">Keyondre Sincere Baxter</p>
                          </Row>
                          </section>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h5>
                    At iSummarize, our mission is to empower individuals and organizations to unlock the full potential of information by providing cutting-edge summarization solutions. We are committed to simplifying complex content, fostering clarity, and accelerating comprehension. By harnessing the power of artificial intelligence and innovative technologies, we strive to streamline information consumption, enhance productivity, and enable informed decision-making. Our goal is to revolutionize the way people engage with and extract value from vast amounts of data, ensuring that knowledge is accessible, actionable, and transformative for all.

                    </h5>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Chatbot />
        <Footer />
    </div>
  )
}

export default AboutUs
