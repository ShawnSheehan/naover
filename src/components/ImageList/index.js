import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const ImageListWrapper = styled.ol`
  max-width: 656px;
  width: 100%;
`;

const ImageList = ({ children }) => (
  <ImageListWrapper>{children}</ImageListWrapper>
);

ImageList.propTypes = {
  children: node.isRequired,
};

export default ImageList;
