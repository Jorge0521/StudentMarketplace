import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import buy from '../images/buy_image.jpeg';

const styles = {
	card: {
		width: 345,
		heeight: 1000,
	},
	media: {
		height: 100,
		paddingTop: '56.25%', // 16:9,
		marginTop: '30',
	},
	noLinkCss: {
		color: 'inherit',
		textDecoration: 'inherit',
	},
};

class Home extends React.Component {
	render() {
		return (
			<Grid
				container
				spacing={0}
				direction="row"
				alignItems="center"
				justify="space-around"
				style={{ minHeight: '70vh' }}>
				<Grid item xs={3}>
					<Link to="/buy" style={styles.noLinkCss}>
						<Card>
							<CardActionArea>
								<CardMedia
									image={buy}
									style={{ height: 0, paddingTop: '56%' }}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Buy
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				</Grid>
				<Grid item xs={3}>
					<Link to="/createBook" style={styles.noLinkCss}>
						<Card>
							<CardActionArea>
								<CardMedia
									image={buy}
									title="Contemplative Reptile"
									style={{ height: 0, paddingTop: '56%' }}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Sell
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				</Grid>
			</Grid>
		);
	}
}

export default Home;
