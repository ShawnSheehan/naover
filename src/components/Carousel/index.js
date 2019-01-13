import React, { Component } from 'react';
// import { shape, string, arrayOf } from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';

import IconButton from '../IconButton';

const CarouselWrapper = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
  white-space: nowrap;
  z-index: 8;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
`;

const CarouselSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: translate-x(${props => props.value}px);
  transition: 'transform ease-out 0.45s';
`;

const Slide = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: '50% 60%';
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

class Carousel extends Component {
  /* static propTypes = {
    data: arrayOf(
      shape({
        name: string,
        img_src: string,
        camera: string,
      }),
    ).isRequired,
  };
  */

  state = {
    images: [
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
      'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg',
    ],
    currentIndex: 0,
    translateValue: 0,
  };

  slideWidth = () => {
    console.log('Test');
    return document.querySelector('.slide').clientWidth;
  };

  prevSlide = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  nextSlide = () => {
    const { currentIndex, images } = this.state;

    if (currentIndex === images.length - 1) {
      this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  render() {
    //  const { data } = this.props;
    const { images, translateValue } = this.state;
    return (
      <CarouselWrapper>
        <CarouselSlide value={translateValue}>
          {images.map(img => (
            <Slide key={uuid.v4()} src={img} className="slide" />
          ))}
        </CarouselSlide>
        <IconButton onAction={this.nextSlide} icon="fas fa-chevron-right" />
      </CarouselWrapper>
    );
  }
}

export default Carousel;
