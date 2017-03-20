import {Component} from 'react';
import {Home} from './general/Home';
import {About} from './general/About';
import {Contact} from './general/Contact';
import {Header} from './general/Header';
import {Footer} from './general/Footer';
import {ChocolateCandy} from './candies/ChocolateCandy';
import {GummyCandy} from './candies/GummyCandy';
import {HardCandy} from './candies/HardCandy';
import {Login} from './forms/Login';
import {SignUp} from './forms/SignUp';
import {SuggestionsAndRequests} from './forms/SuggestionsAndRequests';


export class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Home />
				<About />
				<Contact />
				<Footer />
				<hr />
				<ChocolateCandy />
				<GummyCandy />
				<HardCandy />
				<hr />
				<Login />
				<SignUp />
				<SuggestionsAndRequests />
				<hr />
			</div>
		)
	}
}