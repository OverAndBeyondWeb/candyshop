import {Component} from 'react';
import {Link} from 'react-router-dom';
import {browserHistory} from 'react-router'


export class SignUp extends Component {
	constructor(props) {
		super(props);

	}
	setIsFullPage(bool) {
		this.props.setIsFullPage(bool);
	}

	addUser(e) {
		e.preventDefault();
		const refs = this.refs;
		let user = {};
		let newUser = [];
		user.name = refs.name.value;
		user.password = refs.password.value;
		user.email = refs.email.value;
		newUser.push(user);
		this.props.addUserToState(newUser);
		refs.name.value = '';
		refs.password.value = '';
		refs.email.value = '';
		let link = document.getElementById('login');
		alert('Hi, John. welcome to the candyshop...Please sign in');
		link.click();
	}
	
	componentWillMount() {
		this.setIsFullPage(false);
	}

	componentWillUnmount() {
		this.setIsFullPage(true);
	}
	
	render() {
		return (
			<div className="loginpage">
			  <div className="form">
			  <h3>Register to start your online account!</h3>
				<h4><Link to="/">continue browsing</Link></h4>
			    <form className="registerform" onSubmit={this.addUser.bind(this)}>
			      <input type="text" placeholder="name" ref="name"/>
			      <input type="password" placeholder="password" ref="password"/>
			      <input type="text" placeholder="email address" ref="email"/>
			      <button>create</button>
			      <p className="message">Already registered? <Link to="/login" id="login">Sign In</Link></p>
			    </form>
			  </div>
			</div>
		)
	}
}