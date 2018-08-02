import React, {Component} from 'react'
import Article from '../Article'
import Links from '../Links'


class MainContainer extends Component {
	constructor() {
		super();
		this.state = {
			topic: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			topic: e.target.value
		})

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTopic(this.state.topic);
		this.setState({
			topic: ''
		})
	}



	render() {
		return (
			<div>
				<div className='navBar'>
					<button onClick={this.props.logout}>Logout</button><br/><br/>
					<form onSubmit={this.handleSubmit}>
						<input type='text' name='topic' placeholder='Topic of Interest' value={this.state.topic} onChange={this.handleChange}/>
						<button>Add Topic</button>
					</form><br/>
				</div>
				<div className='leftColumn'>
					<ul>
						{this.props.topics.map((x, i) => <Links changeTopic={this.props.changeTopic} key={i} link={x}/>)}
					</ul>
				</div>
				<div className='rightColumn'>
					{this.props.newsArticles.map((x, i) => <Article key={i} news={x} index={i}/>)}
				</div>

			</div>
	)}

}


export default MainContainer