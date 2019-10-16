import { configure, setAddon } from '@storybook/react';
import '@storybook/addon-console';
import JSXAddon from 'storybook-addon-jsx';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const myTheme = {
  borderRadius: '5px',
  colors: {
    main: '#4093F6',
    darkBlue: 'rgba(51, 112, 185, 0.5)',
    backdrop: '#EDF0F9',
    white: 'white',
  },
};

const themes = [myTheme];

setAddon(JSXAddon);
addDecorator(withThemesProvider(themes));
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory.js');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);