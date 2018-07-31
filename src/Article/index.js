import React, {Component} from 'react';


class Article extends Component {
	constructor() {
		super();
		this.state = {

		}
	}


	render() {
		return(
			<div>
				<a href={this.props.news.url}><h3>{this.props.news.title}</h3></a>
				<h4>Written By: {this.props.news.author}</h4>
			</div>
		)
	}
}


export default Article
