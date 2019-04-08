import React from 'react';
import ListBook from '../components/ListBook';
import {
	InstantSearch,
	SearchBox,
	RefinementList,
	CurrentRefinements,
	ClearRefinements,
} from 'react-instantsearch-dom';
import Grid from '@material-ui/core/Grid';
import { connectHits } from 'react-instantsearch-dom';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	demo: {
		height: 240,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		height: '100%',
		color: theme.palette.text.secondary,
	},
	control: {
		padding: theme.spacing.unit * 2,
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

const Hits = ({ hits }) => (
	<Grid
		container
		direction="row"
		justify="center"
		alignItems="center"
		spacing={16}>
		<Grid item xs={12}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={20}>
				{hits.map(hit => (
					<ListBook
						image={hit.image}
						author={hit.author}
						condition={hit.condition}
						genre={hit.genre}
						price={hit.price}
						title={hit.title}
						userID={hit.userID}
					/>
				))}
			</Grid>
		</Grid>
	</Grid>
);

const CustomHits = connectHits(Hits);

function SearchBook() {
	return (
		<div>
			<CurrentRefinements />
			<ClearRefinements />
			<SearchBox />
			<RefinementList attribute="category" />
			<CustomHits hitComponent={Book} />
		</div>
	);
}

function Book({ hit }) {
	console.log('hit: ', hit);
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			spacing={16}>
			<ListBook
				image={hit.image}
				author={hit.author}
				condition={hit.condition}
				genre={hit.genre}
				price={hit.price}
				title={hit.title}
			/>
		</Grid>
	);
}
export default withStyles(styles)(SearchEngine);
