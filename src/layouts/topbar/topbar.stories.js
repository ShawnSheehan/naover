import React from 'react';
import { storiesOf } from '@storybook/react';

import TopBar from './topbar';

const DefaultTopBar = () => <TopBar>A Default Box</TopBar>;

const LightTopBar = () => <TopBar>A Box With Color</TopBar>;

storiesOf('TopBar', module).add('default', () => <DefaultTopBar />);

storiesOf('TopBar', module).add('light', () => <LightTopBar />);
