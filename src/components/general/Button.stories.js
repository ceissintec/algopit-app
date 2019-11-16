/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import { color } from '@storybook/addon-knobs';

addDecorator(withInfo);
addDecorator(withKnobs);
storiesOf('Button', module).addWithJSX(
  'with background',
  () => <Button bg={color('bg', 'green', 'group1')}>Hello World</Button>,
  { info: 'Aaah ya tu le ta llegando klk' },
);
