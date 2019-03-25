import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import BasicList from '../views/BasicList';
import Buy from '../views/Buy';
import Sale from '../views/Sale';
import Books from '../views/Books';
import PrimarySearchAppBar from '../components/Header';
import CreateBook from '../components/CreateBook';
import Login from '../components/Login';
import PrivateRoute from 'react-private-route';
import { AUTH_TOKEN } from '../ constants';

function isLoggedIn(auth) {
	if (auth) {
		return true;
	} else {
		return false;
	}
}

const Routes = () => {
	const authToken = localStorage.getItem(AUTH_TOKEN);
	return (
		<main>
			<PrimarySearchAppBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/basiclist" component={BasicList} />
				<Route path="/buy" component={Buy} />
				<Route path="/sale" component={Sale} />
				<Route path="/books" component={Books} />
				<PrivateRoute
					exact
					path="/createbook"
					component={CreateBook}
					isAuthenticated={!!isLoggedIn(authToken)}
				/>
				<Route path="/login" component={Login} />
			</Switch>
		</main>
	);
};

export default Routes;
