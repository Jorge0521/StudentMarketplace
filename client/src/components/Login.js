import React, { Component } from 'react';
import { AUTH_TOKEN } from '../ constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import apolloClient from '../apollo-client';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Query } from 'react-apollo';
import CssBaseline from '@material-ui/core/CssBaseline';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
		width: '100%',
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
		const authToken = localStorage.getItem(AUTH_TOKEN);
		const { login, email, password, name, school } = this.state;
		const { classes } = this.props;
		return (
			<div>
				{login ? (
					<div className={classes.main}>
						<CssBaseline />
						<Paper className={classes.paper}>
							<Avatar className={classes.avatar}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component="h1" variant="h5">
								Sign in
							</Typography>
							<form className={classes.form}>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="email">Email Address</InputLabel>
									<Input
										id="email"
										name="email"
										autoComplete="email"
										autoFocus
										value={email}
										onChange={e => this.setState({ email: e.target.value })}
										type="text"
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="password">Password</InputLabel>
									<Input
										name="password"
										id="password"
										autoComplete="current-password"
										value={password}
										onChange={e => this.setState({ password: e.target.value })}
										type="password"
									/>
								</FormControl>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
								/>

								<Mutation
									mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
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
											<Button
												onClick={() => {
													newUser();
												}}
												type="submit"
												fullWidth
												variant="contained"
												color="primary"
												className={classes.submit}>
												{login ? 'login' : 'create account'}
											</Button>
										);
									}}
								</Mutation>
								<div
									className="pointer button"
									onClick={() => this.setState({ login: !login })}>
									{login
										? 'need to create an account?'
										: 'already have an account?'}
								</div>
							</form>
						</Paper>
					</div>
				) : (
					<div className={classes.main}>
						<CssBaseline />
						<Paper className={classes.paper}>
							<Avatar className={classes.avatar}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component="h1" variant="h5">
								Create Account
							</Typography>
							<form className={classes.form}>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="name">Full Name</InputLabel>
									<Input
										id="name"
										name="name"
										autoComplete="name"
										autoFocus
										value={name}
										onChange={e => this.setState({ name: e.target.value })}
										type="text"
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="email">Email Address</InputLabel>
									<Input
										id="email"
										name="email"
										autoComplete="email"
										autoFocus
										value={email}
										onChange={e => this.setState({ email: e.target.value })}
										type="text"
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="password">Password</InputLabel>
									<Input
										name="password"
										id="password"
										autoComplete="current-password"
										value={password}
										onChange={e => this.setState({ password: e.target.value })}
										type="password"
									/>
								</FormControl>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
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
														onChange={e =>
															this.setState({ school: e.target.value })
														}
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

								<Mutation
									mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
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
											<Button
												onClick={() => {
													newUser();
												}}
												type="submit"
												fullWidth
												variant="contained"
												color="primary"
												className={classes.submit}>
												{login ? 'login' : 'create account'}
											</Button>
										);
									}}
								</Mutation>
								<div
									className="pointer button"
									onClick={() => this.setState({ login: !login })}>
									{login
										? 'need to create an account?'
										: 'already have an account?'}
								</div>
							</form>
						</Paper>
					</div>
				)}
			</div>
		);
	}

	_confirm = async data => {
		const { token } = this.state.login ? data.login : data.signup;
		this._saveUserData(token);
		console.log('token created');
		await apolloClient.resetStore();
		this.props.history.push('/createBook');
	};

	_saveUserData = token => {
		localStorage.setItem(AUTH_TOKEN, token);
	};
}

export default withStyles(styles)(Login);
