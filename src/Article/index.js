import React, {Component} from 'react';
import './index.css';
import 'react-bootstrap'


class Article extends Component {
	constructor() {
		super();
		this.state = {

		}
	}


	render() {
		return(
			<div className='container'>
				<a href={this.props.news.url}><h3>{this.props.news.title}</h3></a>
				<small>Written By: {this.props.news.author}</small><br/>
				<a href={this.props.news.url}><img className='img-fluid' alt={this.props.news.title} src={this.props.news.urlToImage}/></a>
			</div>
		)
	}
}


export default Article



//{this.props.news.source.name}