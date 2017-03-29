import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from './Header';
import {Hero} from './Hero';
import {Navigation} from './Navigation';

export class Contact extends Component {

	render() {
		return (
			<div id="contact">
				<Hero />
				<Navigation />
				<div className="wrap">
					<h1>Contact</h1>
				</div>
			</div>
		)
	}
}