import React, { Component } from 'react';
import './App.css';

import Main from './components/layout/Main';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Main} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</div>
			</Router>
		);
	}
}
export default App;
