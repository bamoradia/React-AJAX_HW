import React, {Component} from 'react'


class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username);
	}


	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input name='username' type='text' value={this.state.username} onChange={this.handleChange} placeholder='Username'/>
				<input name='password' type='password' value={this.state.password} onChange={this.handleChange} placeholder='Password'/>
				<button>Login</button>
			</form>
		)
	}
}


export default Login