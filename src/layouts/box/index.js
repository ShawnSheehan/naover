import React from 'react';
import styled from 'styled-components';
import { node, string, number } from 'prop-types';

const BoxWrapper = styled.div`
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  margin: 0 auto;
  min-width: 260px;
  min-height: 260px;
  width: auto;
  position: relative;
`;

const TitleText = styled.div`
  position: absolute;
  top: 0;
  margin-top: -50px;
  text-transform: uppercase;
  font-size: 2.5vh;
  font-weight: 600;
`;

const SubtitleText = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -50px;
  text-transform: uppercase;
`;

const Box = props => {
  const { children, title, subtitle } = props;
  return (
    <BoxWrapper {...props}>
      <TitleText>{title}</TitleText>
      {children}
      <SubtitleText>{subtitle}</SubtitleText>
    </BoxWrapper>
  );
};

Box.propTypes = {
  children: node.isRequired,
  title: string,
  subtitle: number,
};

Box.defaultProps = {
  title: 'a title',
  subtitle: Date.now(),
};

export default Box;
