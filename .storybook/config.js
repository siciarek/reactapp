import {configure, setAddon} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setAddon(infoAddon)

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Songbook',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'http://songbook.siciarek.pl',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showLeftPanel: true,
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showDownPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  downPanelInRight: true,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: false,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
