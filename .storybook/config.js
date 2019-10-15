import {configure, setAddon} from '@storybook/react';
import '@storybook/addon-console';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const req = require.context('../src', true, /.stories.js$/);


function loadStories() {
  require('./welcomeStory.js');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);