import {Component} from 'react';
import {Link} from 'react-router-dom'
import TiClipboard from 'react-icons/lib/ti/clipboard';

const LoggedIn = () => (
	<div className="column userstatus">
		<Link to="/login">Hi, John </Link>|
		<Link to="/signup"> LOG OUT</Link>
	</div>
)

const LoggedOut = () => (
	<div className="column userstatus">
		<Link to="/login">LOGIN </Link>|
		<Link to="/signup"> SIGN UP</Link>
	</div>	 
)

export class Header extends Component {
	
	render() {
		return (
			<header>
				<div className="heading wrap">									 
					<div className="column">
						<TiClipboard className="logo"/>
					</div>
					<div className=" column title">
						<Link to="/">CandyShop</Link>
					</div>
					{this.props.isLoggedIn ? <LoggedIn /> : <LoggedOut />}         
	           	</div>         		
	       	</header>
		)
	}
}
// <nav class="navbar navbar-inverse navbar-fixed-top">
//       <div class="container">
//         <div class="navbar-header">
//           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//             <span class="sr-only">Toggle navigation</span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//           </button>
//           <a class="navbar-brand" href="#">Bootstrap theme</a>
//         </div>
//         <div id="navbar" class="navbar-collapse collapse">
//           <ul class="nav navbar-nav">
//             <li class="active"><a href="#">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#contact">Contact</a></li>
//             <li class="dropdown">
//               <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
//               <ul class="dropdown-menu">
//                 <li><a href="#">Action</a></li>
//                 <li><a href="#">Another action</a></li>
//                 <li><a href="#">Something else here</a></li>
//                 <li role="separator" class="divider"></li>
//                 <li class="dropdown-header">Nav header</li>
//                 <li><a href="#">Separated link</a></li>
//                 <li><a href="#">One more separated link</a></li>
//               </ul>
//             </li>
//           </ul>
//         </div><!--/.nav-collapse -->
//       </div>
//     </nav>
