import React, {Component} from 'react'
import Article from '../Article'


class MainContainer extends Component {
	constructor() {
		super();
		this.state = {

		}
	}



	render() {
		return this.props.newsArticles.map((x, i) => <Article news={x} index={i}/>)
	}

}



export default MainContainer