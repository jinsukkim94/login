import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			password2: '',
			errors: {
				email: '',
				password: '',
				password2: '',
			},
			text: '',
		};
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		axios
			.post('https://jinsuk-login.herokuapp.com/api/users/register', {
				email: this.state.email,
				password: this.state.password,
				password2: this.state.password2,
			})
			.then(response => {
				this.setState({
					email: '',
					password: '',
					password2: '',
					errors: {
						email: '',
						password: '',
						password2: '',
					},
					text: 'Successfully registered as ' + response.data.email + '!!',
				});
			})
			.catch(error => {
				console.log(typeof error.response.data);
				this.setState({
					errors: error.response.data,
				});
			});
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col s8 offset-s2">
						<Link to="/" className="btn-flat waves-effect">
							Back to home
						</Link>
						<div className="col s12" style={{ paddingLeft: '11.250px' }}>
							<h4>
								<b>Register</b> below
							</h4>
							<p className="grey-text text-darken-1">
								Already have an account? <Link to="/login">Log in</Link>
							</p>
						</div>
						<form noValidate onSubmit={this.onSubmit}>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									type="email"
								/>
								<label htmlFor="email">Email</label>
							</div>
							<div>{this.state.errors.email}</div>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
								/>
								<label htmlFor="password">Password (Between 6 - 30 Characters)</label>
							</div>
							<div>{this.state.errors.password}</div>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.password2}
									error={errors.password2}
									id="password2"
									type="password"
								/>
								<label htmlFor="password2">Confirm Password</label>
							</div>
							<div>{this.state.errors.password2}</div>
							<div className="col s12" style={{ paddingLeft: '11.250px' }}>
								<button
									style={{
										width: '150px',
										borderRadius: '3px',
										letterSpacing: '1.5px',
										marginTop: '1rem',
									}}
									type="submit"
									className="btn btn-large waves-effect waves-light hoverable blue accent-3"
								>
									Sign up
								</button>
							</div>
						</form>
						<div className="col s12" style={{ paddingLeft: '11.250px', paddingTop: '30px' }}>
							{this.state.text}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Register;
