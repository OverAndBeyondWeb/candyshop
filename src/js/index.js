import React from 'react';
import {render} from 'react-dom';
import {App} from '../components/App';

window.React = React;

const app = document.getElementById('app'); 
render(
 	<App />,
 	app
)