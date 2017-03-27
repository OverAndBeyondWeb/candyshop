import {Component} from 'react';
import {Link} from 'react-router-dom';


export class SignUp extends Component {

	render() {
		return (
			<div className="loginpage">
			  <div className="form">
			  <h3>Register to start your online account!</h3>
				<h4><Link to="/">continue browsing</Link></h4>
			    <form className="registerform">
			      <input type="text" placeholder="name"/>
			      <input type="password" placeholder="password"/>
			      <input type="text" placeholder="email address"/>
			      <button>create</button>
			      <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
			    </form>
			  </div>
			</div>
		)
	}
}