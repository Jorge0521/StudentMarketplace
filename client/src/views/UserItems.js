import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ListBook from '../components/ListBook';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});

const USER_BOOKS = gql`
	query {
		getLoggedInUser(id: "test") {
			id
			name
			items {
				id
				price
				bookDetails {
					id
					title
					author
					genre
					condition
				}
				photos {
					id
					url
				}
			}
		}
	}
`;

class UserItems extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Query query={USER_BOOKS}>
					{({ loading, error, data }) => {
						if (loading) return 'Loading...';
						if (error) return `Error! ${error.message}`;
						console.log(data);
						const { items, name } = data.getLoggedInUser;
						return (
							<div className="list">
								<h1>{name} Items</h1>
								{items.map((o, i) => (
									<Paper className={classes.root} elevation={2}>
										<ListBook
											key={o.id}
											image={o.photos[0].url}
											title={o.bookDetails.title}
											author={o.bookDetails.author}
											price={o.price}
											condition={o.bookDetails.condition}
											genre={o.bookDetails.genre}
										/>
									</Paper>
								))}
							</div>
						);
					}}
				</Query>
			</div>
		);
	}
}

UserItems.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserItems);
