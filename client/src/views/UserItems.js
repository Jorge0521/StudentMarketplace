import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ListBook from '../components/ListBook';

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
									<ListBook
										key={o.id}
										image={o.photos[0].url}
										title={o.bookDetails.title}
										author={o.bookDetails.author}
										price={o.price}
										condition={o.bookDetails.condition}
										genre={o.bookDetails.genre}
									/>
								))}
							</div>
						);
					}}
				</Query>
			</div>
		);
	}
}

export default UserItems;
