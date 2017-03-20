import {Component} from 'react';
import TiClipboard from 'react-icons/lib/ti/clipboard';
//import '../../css/bootstrap.css';


export class Header extends Component {

	render() {
		return (
			<header>
				<div className="container">
					<div className="row"> 
						<div className="col-md-4">
							<TiClipboard className="headericon"/>
						</div>
						<div className="col-md-4">
							<h1 className="heading">CandyShop</h1>
						</div>
						<div className="col-md-4">
			        		<ul>
			            		<li><a href="#contact">Login</a></li> 
			           		</ul>
			           	</div>
	           		</div>
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
