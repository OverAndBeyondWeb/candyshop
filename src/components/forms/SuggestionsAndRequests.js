import {Component} from 'react';
import {Link} from 'react-router-dom';

let body = document.getElementsByTagName('body')[0];

export class SuggestionsAndRequests extends Component {

	componentDidMount() {
		this.props.setIsFullPage(false);
		body.classList.add('formBackground');
	}
	componentWillUnmount() {
		this.props.setIsFullPage(true);
		body.classList.remove('formBackground');
	}

	render() {
		return (
			<div className="suggestionsandrequests">  
				  <form id="contactform" action="" method="post">
				    <h3>We'd love to hear your feedback!</h3>
				    <h4>Send us your requests and comments</h4>
				    <fieldset>
				      <input placeholder="Your name" type="text" tabIndex="1" required autoFocus/>
				    </fieldset>
				    <fieldset>
				      <input placeholder="Your Email Address" type="email" tabIndex="2" required/>
				    </fieldset>
				    <fieldset>
				      <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" required/>
				    </fieldset>
				    <fieldset>
				      <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" required/>
				    </fieldset>
				    <fieldset>
				      <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
				    </fieldset>
				    <fieldset>
				      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
				    </fieldset>
				    <p className="copyright">Back to <Link to="/">CandyShop</Link></p>
				  </form>
				</div>
		)
	}
}