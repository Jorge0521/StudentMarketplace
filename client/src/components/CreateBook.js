import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

var algoliasearch = require('algoliasearch');

var client = algoliasearch('HFOJJ5GAUD', '391f543039c8a0b3752d4296e2149507');
var index = client.initIndex('studentMarketPlace');

const getBookGenre = gql`
	{
		__type(name: "BookGenre") {
			name
			enumValues {
				name
			}
		}
	}
`;

const getBookCategory = gql`
	{
		__type(name: "BookCondition") {
			name
			enumValues {
				name
			}
		}
	}
`;

const BOOK_MUTATION = gql`
	mutation BookMutation(
		$price: Float
		$title: String!
		$author: String!
		$published: Int!
		$url: String
		$genre: BookGenre!
		$condition: BookCondition!
	) {
		createItem(
			data: {
				listed: true
				price: $price
				bookDetails: {
					create: {
						title: $title
						author: $author
						published: $published
						condition: $condition
						genre: $genre
					}
				}
				photos: { create: { url: $url } }
			}
		) {
			id
			price
		}
	}
`;

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
});

function someFunc(title, author, published, url, price, genre, condition) {
	index.addObject(
		{
			title: title,
			author: author,
			published: published,
			condition: condition,
			genre: genre,
			image: url,
			price: price,
		},
		function(err, content) {
			console.log('objectID=' + content.objectID);
		}
	);
}

class CreateBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			price: '',
			title: '',
			author: '',
			published: '',
			url: '',
			genre: '',
			condition: '',
		};
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const {
			price,
			title,
			author,
			published,
			url,
			condition,
			genre,
		} = this.state;
		const { classes } = this.props;

		return (
			<div>
				<div className="flex flex-column mt3">
					<input
						className="mb2"
						value={title}
						onChange={e => this.setState({ title: e.target.value })}
						type="text"
						placeholder="Name of book"
					/>
					<input
						className="mb2"
						value={author}
						onChange={e => this.setState({ author: e.target.value })}
						type="text"
						placeholder="Author of book"
					/>
					<input
						className="mb2"
						value={price}
						onChange={e => this.setState({ price: parseFloat(e.target.value) })}
						type="number"
						min="1"
						step="any"
						placeholder="Price of book"
					/>
					<input
						className="mb2"
						value={published}
						onChange={e =>
							this.setState({ published: parseInt(e.target.value) })
						}
						type="number"
						min="1"
						placeholder="Published: "
					/>
					<input
						className="mb2"
						value={url}
						onChange={e => this.setState({ url: e.target.value })}
						type="text"
						placeholder="Picture URL"
					/>
					<form className={classes.root} autoComplete="off">
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="genre-simple">Genre</InputLabel>
							<Query query={getBookGenre}>
								{({ data, loading, error }) => {
									let menuItems = [];
									if (loading || error) {
										menuItems = [];
									} else {
										menuItems = data.__type.enumValues;
									}
									return (
										<Select
											value={this.state.genre}
											onChange={e => this.setState({ genre: e.target.value })}
											inputProps={{
												name: 'genre',
												id: 'genre-simple',
											}}>
											{menuItems.map(item => (
												<MenuItem value={item.name}>{item.name}</MenuItem>
											))}
										</Select>
									);
								}}
							</Query>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="condition-simple">Condition</InputLabel>
							<Query query={getBookCategory}>
								{({ data, loading, error }) => {
									let menuItems = [];
									if (loading || error) {
										menuItems = [];
									} else {
										menuItems = data.__type.enumValues;
									}
									return (
										<Select
											value={this.state.condition}
											onChange={e =>
												this.setState({ condition: e.target.value })
											}
											inputProps={{
												name: 'condition',
												id: 'condition-simple',
											}}>
											{menuItems.map(item => (
												<MenuItem value={item.name}>{item.name}</MenuItem>
											))}
										</Select>
									);
								}}
							</Query>
						</FormControl>
					</form>
				</div>
				<div>
					{console.log(price)}
					{console.log(title)}
					{console.log(published)}
					{console.log(url)}
				</div>
				<Mutation
					mutation={BOOK_MUTATION}
					variables={{
						price,
						title,
						author,
						published,
						url,
						genre,
						condition,
					}}>
					{(postBook, { data, error, loading }) => {
						if (error) return <div>{error}</div>;
						if (loading) return <div>{loading}</div>;
						return (
							<button
								onClick={() => {
									postBook();
									someFunc(
										title,
										author,
										published,
										url,
										price,
										genre,
										condition
									);
								}}>
								Submit
							</button>
						);
					}}
				</Mutation>
			</div>
		);
	}
}

export default withStyles(styles)(CreateBook);
