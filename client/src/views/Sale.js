import React from 'react'
import Grid from '@material-ui/core/Grid';

class Sale extends React.Component {
    render(){
        return(
            <Grid>
                <h1>Available Options</h1>
                <ol>
                    <li>Books</li>
                    <li>Clothes</li>
                    <li></li>
                </ol>
            </Grid>
        )
    }
}

export default Sale