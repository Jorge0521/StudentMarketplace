import React from 'react';
import ListBook from '../components/ListBook';
import {
	InstantSearch,
	Hits,
	SearchBox,
	RefinementList,
	CurrentRefinements,
	ClearRefinements,
} from 'react-instantsearch-dom';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	noLinkCss: {
		color: 'inherit',
		textDecoration: 'inherit',
	},
});

const SearchEngine = () => (
	<InstantSearch
		appId="HFOJJ5GAUD"
		apiKey="c0f19066098ec67918997004a056065a"
		indexName="studentMarketPlace">
		{/* Search widgets will go there */}
		<SearchBook />
	</InstantSearch>
);

function SearchBook() {
	return (
		<div>
			<CurrentRefinements />
			<ClearRefinements />
			<SearchBox />
			<RefinementList attribute="category" />
			<Hits hitComponent={Book} />
		</div>
	);
}

function Book({ hit }) {
	return (
		<Link
			to="/sellerdetails"
			style={{ color: 'inherit', textDecoration: 'inherit' }}>
			<Paper className={styles.root} elevation={2}>
				<ListBook
					image={hit.image}
					author={hit.author}
					condition={hit.condition}
					genre={hit.genre}
					price={hit.price}
					title={hit.title}
				/>
			</Paper>
		</Link>
	);
}
export default withStyles(styles)(SearchEngine);
