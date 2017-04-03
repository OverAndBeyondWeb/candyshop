import {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Header} from '../general/Header';
import {ChocolateCandy} from './ChocolateCandy';
import {AllCandy} from './AllCandy';
import {GummyCandy} from './GummyCandy';
import {HardCandy} from './HardCandy';


export class Candies extends Component {

	constructor() {
		super();
		console.log('super');
	}

	render() {
	
		return (

			<div id="candies">
					<div className="sidemenu">
						<div className="headingcontainer">
							<h3><Link to="/">CandyShop</Link></h3>
						</div>
						<nav className="candynav">
							<ul>
								<li><Link to={`${this.props.match.url}`}>All</Link></li>
								<li><Link to={`${this.props.match.url}/hard`}>Hard Candy</Link></li>
								<li><Link to={`${this.props.match.url}/gummy`}>Gummy Candy</Link></li>
								<li><Link to={`${this.props.match.url}/chocolate`}>Chocolate</Link></li>
							</ul>
						</nav>
						<hr />
						<nav className="sitenav">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/requests">Requests</Link></li>
							</ul>
						</nav>
					</div>
					
					
					<div className="maincontent">
						<Route path={`${this.props.match.url}/:candy`} render={() => this.props.location.pathname === "/candies/hard" ?
							<HardCandy candies={this.props.candies} /> : this.props.location.pathname === "/candies/gummy" ?
							<GummyCandy candies={this.props.candies} /> : this.props.location.pathname === "/candies/chocolate" ?
							<ChocolateCandy candies={this.props.candies} /> : null}/>
						<Route exact path="/candies" render={() => <AllCandy candies={this.props.candies} />}/>	
						
					</div>
		
						

			</div>
			
		)
	}
}