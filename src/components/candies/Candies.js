import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../general/Header';
import {ChocolateCandy} from './ChocolateCandy';
import {GummyCandy} from './GummyCandy';
import {HardCandy} from './HardCandy';


export class Candies extends Component {

	render() {
		return (
			<div id="candies">
				<Header />
				<div className="candypage">
					<div className="sidemenu">
						<div className="headingcontainer">
							<h3>CandyShop</h3>
						</div>
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
						<div className="candieshero">
							<h1>Candies</h1>
						</div>

						<HardCandy />
					</div>
				</div>

			</div>
			
		)
	}
}