import {Component} from 'react';

let candylist;

export class ChocolateCandy extends Component {

	numItems(numItems) {
		var arr = []
		for (let i=0;i<numItems;i++) {
			arr.push(' ');
		}
		return arr;
	}

	filterByCategory(obj, category) {
		let candylist = obj.filter(function(item) {
			return item.category === category;
		});
		return candylist;
	}

	render() {
		{candylist = this.filterByCategory(this.props.candies, "chocolate")}
		return (
			<div className="candylist">
				<div className="candieshero chocolate">
					<h1>{candylist[0].category[0].toUpperCase() + candylist[0].category.substring(1)} Candies</h1>
				</div>
				<div className="headingcontainer">
					<h2>Chocolate Candy</h2>
				</div>
				<div className="candycontainer">
					{
						candylist.map(function(item) {
							return (<figure key={item.id}>
										<img src="../../assets/chocopic.jpg"/>
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