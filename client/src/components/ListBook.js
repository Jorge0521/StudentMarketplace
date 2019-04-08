import React from 'react';
import '../styling/popup.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const styles = theme => ({
	card: {
		maxWidth: 400,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	actions: {
		display: 'flex',
	},
	avatar: {
		backgroundColor: red[500],
	},
});

const USER_INFO = gql`
	query userInfo($id: ID) {
		user(id: $id) {
			name
			email
			school
		}
	}
`;

function formatEnum(enumString) {
	return enumString.replace(/_/g, ' ').replace(/\w\S*/g, function(word) {
		return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
	});
}

class DisplayBook extends React.Component {
	state = { expanded: false, userID: '' };

	handleExpandClick = () => {
		this.setState(state => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes } = this.props;
		return (
			<Flippy
				flipOnHover={false} // default false
				flipOnClick={true} // default false
				flipDirection="horizontal" // horizontal or vertical
				ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
				// if you pass isFlipped prop component will be controlled component.
				// and other props, which will go to div
				style={{ width: '360px', height: '360px' }}>
				<FrontSide>
					<CardHeader
						avatar={
							<Avatar aria-label="Book" className={classes.avatar}>
								B
							</Avatar>
						}
						action={
							<IconButton>
								<MoreVertIcon />
							</IconButton>
						}
						title={this.props.title}
						subheader={this.props.author}
					/>
					<CardMedia
						className={classes.media}
						image={this.props.image}
						title={this.props.title}
					/>
					<CardContent>
						<Typography component="p">
							Condition: {' ' + this.props.condition.replace(/_/g, ' ')}
							<br /> Genre: {' ' + this.props.genre.replace(/_/g, ' ')}
							<br /> Price: {' ' + this.props.price}
						</Typography>
					</CardContent>
				</FrontSide>

				<BackSide>
					<Query
						query={USER_INFO}
						variables={{
							id: this.props.userID,
						}}>
						{({ loading, error, data }) => {
							if (loading) return 'Loading...';
							if (error) return `Error! ${error.message}`;
							const { name, school, email } = data.user;
							console.log(data);
							return (
								<div>
									<h1>Seller Info</h1>
									<Typography>Name: {' ' + name}</Typography>
									<Typography>School: {' ' + formatEnum(school)}</Typography>
									<Typography>Email: {' ' + email}</Typography>
								</div>
							);
						}}
					</Query>
				</BackSide>
			</Flippy>
		);
	}
}

DisplayBook.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayBook);
