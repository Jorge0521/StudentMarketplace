import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}
        >
            <Grid item xs={3}>
                <h1>HomePage</h1>
                <p>What do you want to do?</p>
                <h4><Link to='/buy'>Buy</Link></h4>
                <h4><Link to='/sale'>Sale</Link></h4>
            </Grid>   

        </Grid> 
        )

    }

}

export default Home