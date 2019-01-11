import React from 'react';

import Box from '../layouts/box';

export default () => (
  <Box>
    <Box flex="6">1</Box>
    <Box flex="6" column>
      <Box flex="6">2</Box>
      <Box flex="6">2</Box>
    </Box>
  </Box>
);
