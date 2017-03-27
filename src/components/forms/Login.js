import {Component} from 'react';
import {Link} from 'react-router-dom';


export class Login extends Component {

	render() {
		return (
			<div className="loginpage">
			  <div className="form">
			  <h3>Login to your account!</h3>
				<h4><Link to="/">continue browsing</Link></h4>
			    <form className="loginform">
			      <input type="text" placeholder="username"/>
			      <input type="password" placeholder="password"/>
			      <button>login</button>
			      <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
			    </form>
			  </div>
			</div>
		)
	}
}