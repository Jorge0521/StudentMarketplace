import React from 'react';
import { Link } from 'react-router-dom';
import StackGrid from 'react-stack-grid';
import styled from 'tachyons-components';

import buy_books from '../images/buy_books.jpg';
import buy_clothes from '../images/buy_clothes.jpg';
import '../styling/buy.css';

const image_list = [
	{
		image: buy_books,
		caption: 'Books',
	},
	{
		image: buy_clothes,
		caption: 'Clothes',
	},
];

const CategoryItemWrapper = styled('div')`
  fl w-50 w-25-l link overflow-hidden
`;

const CategoryImage = styled('div')`
  grow aspect-ratio--4x6
`;

const CategoryItem = ({ image, caption }) => (
	<CategoryItemWrapper>
		<CategoryImage
			style={{
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		/>
	</CategoryItemWrapper>
);

class Buy extends React.Component {
	render() {
		return (
			<StackGrid columnWidth={'100%'}>
				<article>
					{image_list.map(obj => (
						<Link to="/books">
							<CategoryItem image={obj.image} />
						</Link>
					))}
				</article>
			</StackGrid>
		);
	}
}

export default Buy;
