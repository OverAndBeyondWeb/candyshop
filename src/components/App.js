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


//******** React Icons **********//
import TiClipboard from 'react-icons/lib/ti/clipboard';
import TiChartPie from 'react-icons/lib/ti/chart-pie';
import TiDocumentText from 'react-icons/lib/ti/document-text';

//******** CSS **********//
import '../css/main.css';

export class App extends Component {

	render() {
		return (
			<div>
				<TiClipboard className='ico'/>
				<Header />
				<Home />
				<About />
				<Contact />
				<Footer />
				<hr />
				<TiChartPie className='ico'/>
				<ChocolateCandy />
				<GummyCandy />
				<HardCandy />
				<hr />
				<TiDocumentText className='ico'/>
				<Login />
				<SignUp />
				<SuggestionsAndRequests />
				<hr />
			</div>
		)
	}
}