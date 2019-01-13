import React, { Component } from 'react';
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
  transform: translateX(${props => props.value}px);
  transition: transform ease-out 0.45s;
`;

const Slide = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: '50% 60%';
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

class Carousel extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0,
  };

  previous = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  next = () => {
    const { currentIndex } = this.state;
    const { data } = this.props;
    if (currentIndex === data.length - 1) {
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

  slideWidth = () => document.querySelector('.slide').clientWidth;

  render() {
    const { data } = this.props;
    const { translateValue } = this.state;
    return (
      <React.Fragment>
        <CarouselWrapper>
          <CarouselSlide value={translateValue}>
            {data.slice(0, 10).map(img => (
              <Slide key={uuid.v4()} src={img} className="slide" />
            ))}
          </CarouselSlide>
        </CarouselWrapper>
        <div className="ctrl-wrap">
          <IconButton onAction={this.previous} icon="fas fa-chevron-left" />
          <IconButton onAction={this.next} icon="fas fa-chevron-right" />
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
