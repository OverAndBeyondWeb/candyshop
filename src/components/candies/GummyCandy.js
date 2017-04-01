import {Component} from 'react';


export class GummyCandy extends Component {

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
				<div className="candieshero gummycandy">
					<h1>Candies</h1>
				</div>
				<div className="headingcontainer">
					<h2>Gummy Candy</h2>
				</div>
				<div className="candycontainer">
					{
						this.numItems(8).map(function(item, i) {
							return (<figure key={i}>
										<img src="../../assets/gummypic.jpg"/>
										<figcaption>all candy</figcaption>
									</figure>)
						})
					}		
				</div>
			</div>
		)
	}
}