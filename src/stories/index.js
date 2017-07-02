import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';

import '../app/App.css'
import '../app/components/AppHeader.css'
import {AppHeader} from '../app/components'

storiesOf('AppHeader', module)
.add('With no params', () => <AppHeader/>)
.add('With title', () => <AppHeader title="Zażółć gęślą jaźń!"/>)

