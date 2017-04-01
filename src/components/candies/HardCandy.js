import {Component} from 'react';


export class HardCandy extends Component {

	numItems(numItems) {
		var arr = []
		for (let i=0;i<numItems;i++) {
			arr.push(' ');
		}
		return arr;
	}

	render() {
		return (
			<div id="candylist">
				<div className="candieshero hardcandy">
					<h1>Candies</h1>
				</div>
				<div className="headingcontainer">
					<h2>Hard Candy</h2>
				</div>
				<div className="candycontainer">
					{
						this.numItems(7).map(function(item, i) {
							return (<figure key={i}>
										<img src="../../assets/hardpic.jpg"/>
										<figcaption>all candy</figcaption>
									</figure>)
						})
					}		
				</div>
			</div>
		)
	}
}