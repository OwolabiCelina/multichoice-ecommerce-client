import React from 'react'

import Helmet from '../Helmet/Helmet';

import { Container, Row, Col } from 'reactstrap';

const Home = () => {

  const year = new Date().getFullYear();
  return ( <Helmet title={"home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year} </
                p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam eaque quia quis aspernatur necessitatibus corrupti ratione 
                    impedit vero nemo velit?</p>

                    <button className="buy__btn">SHOP NOW</button>
            </div>
          </Col>

            <Col lg='6' md='6'>
              
            </Col>

        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Home;