
//******** React Lib *********//
import {Component} from 'react';
import {BrowserRouter as Router, Route, Link, hashHistory} from 'react-router-dom';
import {Switch} from 'react-router';

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
import '../css/reset.scss';
import '../css/main.scss';

//******** JSON **********//
import json from '../JSON/candylist.json';

//******* App *********//


export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			isFullPage: true,
			users:[],
			candies: null
		}
		this.setIsFullPage = this.setIsFullPage.bind(this);
	}

	componentDidMount() {
		this.setState({candies: json.candies});
	}
	
	addUserToState(newUser) {
		this.setState({users: this.state.users.concat(newUser)});
		console.log(this.state.users);
	}

	setIsFullPage(bool) {
		this.setState({
			isFullPage: bool
		});
	}

	render() {
		return (

			<Router>
				<div>
					{this.state.isFullPage ? <Header isLoggedIn={this.state.isLoggedIn}/> : null}
					<Route exact path="/"  component={Home} id="bald"/>
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/candies" render={({match, location}) => <Candies match={match}
																				   location={location}
																				   candies={this.state.candies}/>} />
					<Route path="/requests" render={() => <SuggestionsAndRequests setIsFullPage={this.setIsFullPage}/>} />
					<Route path="/login" render={() => <Login setIsFullPage={this.setIsFullPage}/>} />
					<Route path="/signup" render={() => <SignUp 
															setIsFullPage={this.setIsFullPage}
															addUserToState={this.addUserToState.bind(this)}/>} />
					{this.state.isFullPage ? <Footer /> : null}
				</div>
			</Router>
		)
	}
}

App.defaultProps = {
	isFullPage: true
}
