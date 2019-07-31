import React, { Component } from 'react';

export default class LoggedIn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
	}
	fetchCurr() {
		this.fetchUser().then((res) => {
			return <div> Hello, {this.state.username}!</div>
		})
	}
	logOut() {
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="container">
				<div style={{ marginTop: '4rem' }} className="row">
					<div className="col s8 offset-s2">
						{this.fetchCurr()}
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
