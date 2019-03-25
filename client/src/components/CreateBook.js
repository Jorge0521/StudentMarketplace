import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
	main: {
		width: 'auto',
		display: 'block',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
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
				<div className={classes.main}>
					<CssBaseline />
					<Paper className={classes.paper}>
						<Avatar className={classes.avatar}>
							<StoreOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Create a book
						</Typography>
						<form className={classes.form}>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="Title">Title</InputLabel>
								<Input
									id="title"
									name="title"
									autoComplete="title"
									autoFocus
									value={title}
									onChange={e => this.setState({ title: e.target.value })}
									type="text"
								/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="Author">Author</InputLabel>
								<Input
									name="author"
									id="author"
									autoComplete="author"
									value={author}
									onChange={e => this.setState({ author: e.target.value })}
									type="text"
								/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="Price">Price</InputLabel>
								<Input
									name="price"
									id="price"
									autoComplete="price"
									value={price}
									onChange={e =>
										this.setState({ price: parseFloat(e.target.value) })
									}
									type="number"
									min="1"
									step="any"
								/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="Published">Published</InputLabel>
								<Input
									name="published"
									id="published"
									autoComplete="published"
									value={published}
									onChange={e =>
										this.setState({ published: parseInt(e.target.value) })
									}
									type="number"
									min="1"
								/>
							</FormControl>
							<FormControl margin="normal" required fullWidth>
								<InputLabel htmlFor="Picture URL">Picture URL</InputLabel>
								<Input
									name="picture url"
									id="picture url"
									autoComplete="picture url"
									value={url}
									onChange={e => this.setState({ url: e.target.value })}
									type="text"
								/>
							</FormControl>
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
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
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
											this.props.history.push('/buy');
										}}>
										{' '}
										Submit
									</Button>
								);
							}}
						</Mutation>
					</Paper>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(CreateBook);
