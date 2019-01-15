import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from '../layouts/dashboard';
import { getImage } from '../utils/selectors';

const DiscoverWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  left: 50%;
  margin: 0 auto;
  min-width: 500px;
  width: 500px;
  height: 350px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  background-color: #4b6464 !important;
  background: url(${props => (props.image ? props.image : null)}) no-repeat;
  background-size: cover;
  background-position: 50% 60%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  .sidetitle {
    opacity: 1;
    -ms-transform: translateX(0px);
    position: absolute;
    top: calc(50% - 50vh + 47vh);
    right: -110px;
    padding-left: 0px;
    margin-bottom: 30px;
    white-space: nowrap;
    font-size: 1.65vh;
    -webkit-letter-spacing: 0.2em;
    -moz-letter-spacing: 0.2em;
    -ms-letter-spacing: 0.2em;
    letter-spacing: 0.2em;
    color: #4b6464;
    line-height: 1.2;
    &:before {
      transform: translateX(-30px);
      content: '';
      position: absolute;
      width: 2px;
      background: #4b6464;
      top: -10px;
      bottom: -10px;
      left: 0;
    }
  }
  .subtitle {
    bottom: calc(100% + 30px);
    left: 0px;
    margin: 0;
    padding: 0;
    position: absolute;
    text-transform: uppercase;
    span {
      color: #7ed6df;
      margin-left: 10px;
    }
  }
`;

const DiscoverScreen = props => {
  const { image } = props;
  const { img_src, sol, camera, rover } = image;
  const { name, status } = rover;
  return (
    <Dashboard filter="camera">
      <DiscoverWrapper image={img_src}>
        <div className="sidetitle">
          {sol}
          <br />
          {camera.name}
        </div>
        <div className="subtitle">
          Mars {name} Rover <span>{status}</span>
        </div>
      </DiscoverWrapper>
    </Dashboard>
  );
};

const mapStateToProps = state => {
  const id = JSON.parse(localStorage.getItem('id'));
  const image = getImage(id)(state);
  return {
    id,
    image
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(DiscoverScreen)
);
