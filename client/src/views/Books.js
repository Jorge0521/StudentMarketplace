import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SearchEngine from '../components/SearchEngine';

const BOOK_QUERY = gql`
	query {
		items(listed: true) {
			id
			price

			user {
				id
				name
				email
				school
			}
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
`;

class Books extends React.Component {
	render() {
		return (
			<div className="section">
				<Query query={BOOK_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return 'Loading...';
						if (error) return `Error! ${error.message}`;
						return (
							<div>
								<SearchEngine />
							</div>
						);
					}}
				</Query>
			</div>
		);
	}
}

export default Books;
