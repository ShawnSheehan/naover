import React from 'react';
import { shallow } from 'enzyme';

import Tile from './index';

describe('<Tile />', () => {
  it('should render', () => {
    const Wrapper = shallow(
      <Tile
        image="https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg"
        onClick={() => console.log('Test')}
      />
    );
    expect(Wrapper).toMatchSnapshot();
  });
});
