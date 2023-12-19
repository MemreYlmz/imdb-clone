import React from 'react'
import EndGame from "../Images/endGame.jpg"
import "./MoviePage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";


function MoviePage() {
  return (
    <>
      <div className='MovieBackground'>
        <div className='MovieBackgroundImage'>
          <Container style={{marginLeft:"0px"}} >

            <Row >
              <Col ><h3>EndGame</h3></Col>
              <Col>
                <div>
                  <Row>
                    <Col>IMDb RATING</Col>
                    <Col>YOUR RATING</Col>
                    <Col>POPULARITY</Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
                <Col>2023 1.2hr</Col>
                <Col>
                  <div>
                    <Row>
                      <Col>
                        <div>
                          <Row>
                            <Col>
                              <FaStar/>
                            </Col>
                            <Col>
                              <h5>8/10</h5>
                              <h5>12k</h5>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col>
                        <Row>
                          <Col>  <FaStar/> </Col>
                          <Col> Rate</Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col> <FaStar/></Col>
                          <Col>706</Col>
                          <Col>500</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col> 
            </Row>

          </Container>
        </div>

      </div>
      

    </>
  )

  
}

export default MoviePage
