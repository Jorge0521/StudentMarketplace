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
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
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
	);
}
export default withStyles(styles)(SearchEngine);
