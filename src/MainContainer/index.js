import React, {Component} from 'react'
import Article from '../Article'


class MainContainer extends Component {

	render() {
		return (
			<div>
				<button onClick={this.props.logout}>Logout</button><br/>
				{this.props.newsArticles.map((x, i) => <Article key={i} news={x} index={i}/>)}
			</div>
	)}

}


export default MainContainer