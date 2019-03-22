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

const Routes = () => (
	<main>
		<PrimarySearchAppBar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/basiclist" component={BasicList} />
			<Route path="/buy" component={Buy} />
			<Route path="/sale" component={Sale} />
			<Route path="/books" component={Books} />
			<Route path="/createbook" component={CreateBook} />
			<Route path="/login" component={Login} />
		</Switch>
	</main>
);

export default Routes;
