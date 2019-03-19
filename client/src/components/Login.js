import React, { Component } from 'react';
import { AUTH_TOKEN } from '../ constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Query } from 'react-apollo';

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

const getSchool = gql`
	{
		__type(name: "School") {
			name
			enumValues {
				name
			}
		}
	}
`;

const SIGNUP_MUTATION = gql`
	mutation SignupMutation(
		$email: String!
		$password: String!
		$name: String!
		$school: School!
	) {
		signup(
			data: { email: $email, name: $name, password: $password, school: $school }
		) {
			token
		}
	}
`;

const LOGIN_MUTATION = gql`
	mutation LoginMutation($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;

const styles = theme => ({
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
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
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

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: true, // switch between Login and SignUp
			email: '',
			password: '',
			name: '',
			school: '',
		};
	}
	render() {
		const { login, email, password, name, school } = this.state;
		const { classes } = this.props;

		return (
			<div>
				<h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
				<div className="flex flex-column mt3">
					<input
						className="mb2"
						value={name}
						onChange={e => this.setState({ name: e.target.value })}
						type="text"
						placeholder="Your Name..."
					/>
					<input
						className="mb2"
						value={email}
						onChange={e => this.setState({ email: e.target.value })}
						type="text"
						placeholder="Email..."
					/>
					<input
						className="mb2"
						value={password}
						onChange={e => this.setState({ password: e.target.value })}
						type="password"
						placeholder="password..."
					/>
					<form className={classes.root} autoComplete="off">
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="school-simple">School</InputLabel>
							<Query query={getSchool}>
								{({ data, loading, error }) => {
									let menuItems = [];
									if (loading || error) {
										menuItems = [];
									} else {
										menuItems = data.__type.enumValues;
									}
									return (
										<Select
											value={this.state.school}
											onChange={e => this.setState({ school: e.target.value })}
											inputProps={{
												name: 'school',
												id: 'school-simple',
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
					<Mutation
						mutation={SIGNUP_MUTATION}
						variables={{
							email,
							password,
							name,
							school,
						}}
						onCompleted={data => this._confirm(data)}>
						{(newUser, { data, error, loading }) => {
							if (error) return <div>{error}</div>;
							if (loading) return <div>{loading}</div>;
							return (
								<button
									onClick={() => {
										newUser();
									}}>
									{login ? 'login' : 'create account'}
								</button>
							);
						}}
					</Mutation>
					<div
						className="pointer button"
						onClick={() => this.setState({ login: !login })}>
						{login ? 'need to create an account?' : 'already have an account?'}
					</div>
				</div>
			</div>
		);
	}

	_confirm = async data => {
		const { token } = this.state.login ? data.login : data.signup;
		this._saveUserData(token);
		this.props.history.push(`/`);
	};

	_saveUserData = token => {
		localStorage.setItem(AUTH_TOKEN, token);
	};
}

export default withStyles(styles)(Login);
