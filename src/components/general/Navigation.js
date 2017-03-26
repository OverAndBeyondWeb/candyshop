import {Component} from 'react';
import {Link} from 'react-router-dom'


export class Navigation extends Component {

	render() {
		return (
			<div id="navigation">
				<nav className="wrap">
					<ul>
						<li><Link to="/candies">Candies</Link></li>						
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>							
						<li><Link to="/requests">Requests</Link></li>							
					</ul>
				</nav>
			</div>

		)
	}
}