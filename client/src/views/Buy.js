import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
class Buy extends React.Component {
    render(){
        return(
            <Grid>
                <h1>Available Options</h1>
                <ol>
                    <li><Link to='/books'>Books</Link></li>
                    <li>Clothes</li>
                </ol>
            </Grid>
        )
    }
}

export default Buy