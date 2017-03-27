
//******** React Lib *********//
import {Component} from 'react';
import {BrowserRouter as Router, Route, Link, hashHistory} from 'react-router-dom';

//******* Components **********//
import {Home} from './general/Home';
import {About} from './general/About';
import {Contact} from './general/Contact';
import {Header} from './general/Header'
import {Hero} from './general/Hero'
import {Navigation} from './general/Navigation'
import {Candies} from './candies/Candies';
import {Footer} from './general/Footer';
import {ChocolateCandy} from './candies/ChocolateCandy';
import {GummyCandy} from './candies/GummyCandy';
import {HardCandy} from './candies/HardCandy';
import {Login} from './forms/Login';
import {SignUp} from './forms/SignUp';
import {SuggestionsAndRequests} from './forms/SuggestionsAndRequests';


//******** React Icons **********//
import TiClipboard from 'react-icons/lib/ti/clipboard';
import TiChartPie from 'react-icons/lib/ti/chart-pie';
import TiDocumentText from 'react-icons/lib/ti/document-text';

//******** CSS **********//

import '../css/reset.css';
import '../css/main.css';

//******* App *********//

const Bay = () => (
  <div>
    <h2>Bay</h2>
  </div>
)

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}

	render() {
		return (

			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/candies" component={Candies} >
						<Route path="/candies/hard" children={HardCandy} />
						<Route path="/candies/gummy" children={GummyCandy} />
						<Route path="/candies/chocolate" children={ChocolateCandy} />
					</Route>
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/requests" component={SuggestionsAndRequests} />
					<Footer />
				</div>
			</Router>
		)
	}
}

// export class App extends Component {

// 	render() {
// 		return (
// 			<div>
// 				<Header />
// 				<Home />
// 				<About />
// 				<Contact />
// 				<Footer />
// 				<hr />
// 				<TiChartPie className='ico'/>
// 				<ChocolateCandy />
// 				<GummyCandy />
// 				<HardCandy />
// 				<hr />
// 				<TiDocumentText className='ico'/>
// 				<Login />
// 				<SignUp />
// 				<SuggestionsAndRequests />
// 				<hr />
// 			</div>
// 		)
// 	}
// }