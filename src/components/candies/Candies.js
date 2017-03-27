import {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Header} from '../general/Header';
import {ChocolateCandy} from './ChocolateCandy';
import {AllCandy} from './AllCandy';
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
								<li><Link to={this.props.match.url}>All</Link></li>
								<li><Link to={`${this.props.match.url}/hard`}>Hard Candy</Link></li>
								<li><Link to={`${this.props.match.url}/gummy`}>Gummy Candy</Link></li>
								<li><Link to={`${this.props.match.url}/chocolate`}>Chocolate</Link></li>
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
						{this.props.location.pathname === "/candies/gummy" ? 
							<GummyCandy /> : this.props.location.pathname === "/candies/hard" ?
							<HardCandy /> : this.props.location.pathname === "/candies/chocolate" ?
							<ChocolateCandy /> : <AllCandy />} 
							
					</div>
						
				</div>

			</div>
			
		)
	}
}