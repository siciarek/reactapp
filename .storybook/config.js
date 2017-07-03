import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Songbook Storybook',
  url: 'http://songbook.siciarek.pl',
  goFullScreen: false,
  showSearchBox: false,
  sortStoriesByKind: true,
  showLeftPanel: true,
  showDownPanel: true,
  downPanelInRight: true,
});

setAddon(infoAddon);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
