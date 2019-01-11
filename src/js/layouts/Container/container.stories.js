import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container';

const DefaultContainer = () => <Container>A Default Container</Container>;

const FluidContainer = () => <Container fluid>A Fluid Container</Container>;

const ContainerColor = () => (
  <Container color="#eeeeee">A Container With Color</Container>
);

storiesOf('Container', module).add('default', () => <DefaultContainer />);

storiesOf('Container', module).add('fluid', () => <FluidContainer />);

storiesOf('Container', module).add('color', () => <ContainerColor />);
