import {Component} from 'react';
var path = require('path');



export class AllCandy extends Component {

	numItems(numItems) {
		var arr = []
		for (let i=0;i<numItems;i++) {
			arr.push(' ');
		}
		return arr;
	}

	render() {
		return (
			<div className="candylist">
				<div className="candieshero allcandy">
					<h1>Candies</h1>
				</div>
				<div className="headingcontainer">
					<h2>All Candy</h2>
				</div>
				<div className="candycontainer">
					{
						this.numItems(5).map(function(item, i) {
							return (<figure key={i}>
										<img src="../../assets/allpic.jpg"/>
										<figcaption>all candy</figcaption>
									</figure>)
						})
					}	
				</div>
			</div>
		)
	}
}