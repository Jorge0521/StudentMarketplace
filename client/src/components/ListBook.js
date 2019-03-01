import React from "react";
import Grid from '@material-ui/core/Grid';
import Popup from "reactjs-popup";
import "../styling/popup.css"

const ListBook = (props) => (
    <Grid container  className="book" key={props.id}>
        <img src={props.image} width="200px" height="200px" alt="Profile" />
        <Grid item>
            <h1 style={{margin:0, marginLeft: 20}}>
                {props.title}     
            </h1>
            <p style={{margin:0, marginLeft: 20}}> by {props.author}</p>
            <p style={{margin:0, marginLeft:20, textTransform:"capitalize"  }}> <b>Condition:</b> {(props.condition).replace(/[^a-zA-Z ]/g, " ").toLowerCase()}</p>
            <p style={{margin:0, marginLeft:20, textTransform:"capitalize"  }}> <b>Category: </b>{(props.genre).replace(/[^a-zA-Z ]/g, " ").toLowerCase()}</p>
            <h2 style={{marginLeft: 20,}}>${props.price}</h2>
        </Grid>
    </Grid>
  
  );
  
  export default ListBook;
  