import React from "react";
import Grid from '@material-ui/core/Grid';
class HomePage extends React.Component {
    s
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
                <h4><a href="">Buy</a></h4>
                 <h4><a href="">Sale</a></h4>
            </Grid>   

        </Grid> 
        )

    }

}

export default HomePage