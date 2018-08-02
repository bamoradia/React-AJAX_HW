import React, {Component} from 'react';


class Links extends Component {

	handleClick = (e) => {
		e.preventDefault();
		this.props.changeTopic(this.props.link)
	}

	render() {
		return (
			<li onClick={this.handleClick}><button>{this.props.link}</button></li>
		)
	}
}



export default Links