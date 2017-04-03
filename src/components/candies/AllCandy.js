import {Component} from 'react';
var path = require('path');

let candylist;

export class AllCandy extends Component {

	numItems(numItems) {
		var arr = []
		for (let i=0;i<numItems;i++) {
			arr.push(' ');
		}
		return arr;
	}


	render() {
		{candylist = this.props.candies}
		return (
			<div className="candylist">
				<div className="candieshero allcandy">
					<h1>All Candies</h1>
				</div>
				<div className="headingcontainer">
					<h2>All Candy</h2>
				</div>
				<div className="candycontainer">
					{
						candylist.map(function(item) {
							return (<figure key={item.id}>
										<img src="../../assets/allpic.jpg"/>
										<figcaption>{item.name}</figcaption>
										<div>{item.price}</div>
									</figure>)
						})
					}	
				</div>
			</div>
		)
	}
}