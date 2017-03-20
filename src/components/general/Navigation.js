import {Component} from 'react';


export class Navigation extends Component {

	render() {
		return (
			<div id="navigation">
				<nav className="wrap">
					<ul>
						<li><a href="#">Candies</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Requests</a></li>
					</ul>
				</nav>
			</div>

		)
	}
}