import { Carousel, CarouselItem, Container } from 'react-bootstrap'
import React from 'react'
import './HomeSection.css';




function HomeSection({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart }) {
  return (
    <>
      <Container>
        <div className="row home__home-row"
          style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
          <div className='col'>
            <div className="home__home-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightTextDesc ? 'heading dark' : 'heading'}>{headline}</h1>
              <p >{description}</p>
            </div>
          </div>
          <div className="col">
            <div className="home__home-img-wrapper">
              <img src={img} alt={alt} className='Home__home-img' />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomeSection
