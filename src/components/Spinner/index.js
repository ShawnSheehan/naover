import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import styled from 'styled-components';

import SpinnerGIF from '../../assets/spinner.gif';

const SpinnerWrapper = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
  white-space: nowrap;
  z-index: 8;
  .gif {
    width: 100%;
    height: 100%;
  }
`;

const Spinner = ({ loading, propsLoading }) => (
  <React.Fragment>
    {loading ||
      (propsLoading && (
        <SpinnerWrapper>
          <img src={SpinnerGIF} alt="loading" className="gif" />
        </SpinnerWrapper>
      ))}
  </React.Fragment>
);

Spinner.propTypes = {
  loading: bool.isRequired,
  propsLoading: bool
};

Spinner.defaultProps = {
  propsLoading: false
};

const mapStateToProps = state => ({
  loading: state.naover.loading
});

export default connect(
  mapStateToProps,
  null
)(Spinner);
