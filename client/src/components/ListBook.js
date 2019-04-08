import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styling/popup.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

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
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
});

class DisplayBook extends React.Component {
	state = { expanded: false };

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
							Condition: {' ' + this.props.condition}
							<br /> Genre: {' ' + this.props.genre.replace(/_/g, ' ')}
							<br /> Price: {' ' + this.props.price}
						</Typography>
					</CardContent>
				</FrontSide>

				<BackSide>rock</BackSide>
			</Flippy>
		);
	}
}

DisplayBook.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayBook);
