import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button';

const PrimaryButton = () => (
  <Button
    onClick={() => console.log('Button Clicked')}
    color="#1b1b1b"
    primary={false}
  >
    Default Button
  </Button>
);

const CircleButton = () => (
  <Button
    onClick={() => console.log('Button Clicked')}
    color="#1b1b1b"
    circle
    primary={false}
    width="50px"
    height="50px"
  >
    x
  </Button>
);

storiesOf('Button', module).add('default', () => <PrimaryButton />);

storiesOf('Button', module).add('circle', () => <CircleButton />);
