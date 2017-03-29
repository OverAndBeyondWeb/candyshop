import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from './Header';
import {Hero} from './Hero';
import {Navigation} from './Navigation';




//import '../../css/test.css'
//import '../../css/home.css'

export class Home extends Component {



	render() {
		return (
			<div id="home">
				<Hero />
				<Navigation />
				<div id="page">
					<div className="contentBox">
						<div className="content wrap">
							<div className="candyCategory">
								<h2>Chocolate Candy</h2>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
								<button><Link to="/candies/chocolate">View details</Link></button>
							</div>
							<div className="candyCategory">
								<h2>Hard Candy</h2>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
								<button><Link to="/candies/hard">View details</Link></button>
							</div>
							<div className="candyCategory">
								<h2>Gummy Candy</h2>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
								<button><Link to="/candies/gummy">View details</Link></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}