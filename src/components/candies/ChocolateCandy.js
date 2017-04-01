import {Component} from 'react';


export class ChocolateCandy extends Component {

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
				<div className="candieshero chocolate">
					<h1>Candies</h1>
				</div>
				<div className="headingcontainer">
					<h2>Chocolate Candy</h2>
				</div>
				<div className="candycontainer">
					{
						this.numItems(9).map(function(item, i) {
							return (<figure key={i}>
										<img src="../../assets/chocopic.jpg"/>
										<figcaption>all candy</figcaption>
									</figure>)
						})
					}	
				</div>
			</div>
		)
	}
}