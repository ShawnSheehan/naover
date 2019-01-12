import React from 'react';
import styled from 'styled-components';
import { node, string, func } from 'prop-types';

const ImageItemWrapper = styled.li`
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  justify-content: center;
  margin: 12px 12px;
  position: relative;
`;

const Image = styled.button`
  background-color: #fff;
  border: 1px solid #0fbcf9;
  border-radius: 50%;
  height: 140px;
  width: 140px;
  letter-spacing: 0.1em;
  outline: none;
  transition: transform 0.2s ease;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
  z-index: 6;
  background: url(${props => props.src && props.src}) no-repeat center center;
  background-size: cover;
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;

const ImageItem = props => (
  <ImageItemWrapper {...props}>
    <Image {...props} />
  </ImageItemWrapper>
);

ImageItem.propTypes = {
  children: node.isRequired,
  src: string.isRequired,
  onClick: func.isRequired,
};

export default ImageItem;

/* 
background: url(${props => props.src && props.src}) no-repeat;
  background-size: cover;
  background-position: center center;
*/
