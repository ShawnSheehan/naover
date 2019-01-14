import React from 'react';
import { string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateOff = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(0deg);
  }
`;
const TileWrapper = styled.div`
  margin: 5px 10px;
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #4b6464 !important;
  background: url(${props => (props.image ? props.image : null)}) no-repeat;
  background-size: cover;
  background-position: 50% 60%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  opacity: 0.6;
  animation: ${props => (props.loading ? rotate : rotateOff)} 2s linear infinite;
  &:hover {
    opacity: 1;
  }
`;

const Tile = props => {
  const { route, history } = props;
  return <TileWrapper {...props} onClick={() => history.push(route)} />;
};

Tile.propTypes = {
  image: string,
  route: string,
};

Tile.defaultProps = {
  image: null,
  route: '/',
};

const mapStateToProps = state => ({
  loading: state.rover.loading,
});

export default withRouter(connect(mapStateToProps)(Tile));
