import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './box';

const DefaultBox = () => (
  <Box height="500px" width="500px">
    A Default Box
  </Box>
);

const BoxColor = () => (
  <Box color="#eeeeee" height="500px" width="500px">
    A Box With Color
  </Box>
);

storiesOf('Box', module).add('default', () => <DefaultBox />);

storiesOf('Box', module).add('color', () => <BoxColor />);
