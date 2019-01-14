import React from 'react';
import { connect } from 'react-redux';
import { node } from 'prop-types';
import styled from 'styled-components';

import Tile from '../../components/Tile';

const GalleryWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  left: 50%;
  margin: 0 auto;
  max-width: 500px;
  max-width: 500px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`;

const Gallery = props => {
  const { loading, data } = props;
  return (
    <GalleryWrapper loading={loading}>
      {data.slice(0, 10).map(d => (
        <Tile image={d.img_src} key={d.id} route={`/discover/${d.id}`} />
      ))}
      <Tile />
      <Tile />
    </GalleryWrapper>
  );
};

Gallery.proptTypes = {
  children: node.isRequired,
};

const mapStateToProps = state => ({
  loading: state.rover.loading,
});

export default connect(mapStateToProps)(Gallery);
