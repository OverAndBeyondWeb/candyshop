import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../general/Header';


export class Candies extends Component {

	render() {
		return (
			<div id="candies">
				<Header />
				<div className="sidenav">
					<h1>CandyShop</h1>
					<nav className="candynav">
						<ul>
							<li>All</li>
							<li>Hard Candy</li>
							<li>Gummy Candy</li>
							<li>Chocolate</li>
						</ul>
					</nav>
					<hr />
					<nav className="sitenav">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Contact</li>
							<li>Requests</li>
						</ul>
					</nav>
				</div>
				<div className="maincontent">
					<h1>Type of Candy</h1>
					<div>
						candy list
					</div>
				</div>

			</div>
			
		)
	}
}