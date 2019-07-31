import React, { Component } from 'react';

export default class LoggedIn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
	}
	fetchUser() {
		this.fetchUser().then((res) => {
			if(res.message) {
				this.setState({
					username: res
				})
			}
		})
	}
	logOut() {
		this.props.history.push('/');
	}

	render() {
		this.fetchUser(); 
		return (
			<div className="container">
				<div style={{ marginTop: '4rem' }} className="row">
					<div className="col s8 offset-s2">
						<div> Hello, {this.state.username}!</div>
						<button
							style={{
								width: '150px',
								borderRadius: '3px',
								letterSpacing: '1.5px',
								marginTop: '1rem',
							}}
							className="btn btn-large waves-effect waves-light hoverable blue accent-3"
							onClick={() => {
								this.logOut();
							}}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		);
	}
}
