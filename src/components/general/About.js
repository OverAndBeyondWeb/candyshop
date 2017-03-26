import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from './Header';
import {Hero} from './Hero';
import {Navigation} from './Navigation';

export class About extends Component {

	render() {
		return (
			<div id="about">
				<Header />
				<Hero />
				<Navigation />
				<div className="wrap">
					<h1>About</h1>
				</div>
			</div>

		)
	}
}