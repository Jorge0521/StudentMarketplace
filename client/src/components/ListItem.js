import React from "react";
import Grid from '@material-ui/core/Grid';
import Popup from "reactjs-popup";
import "../styling/popup.css"

const ListItem = (props) => (
  <Grid container  className="item" key={props.id}>
    {props.photos.map(photo => ( <img src={photo.url} width="200px" height="200px" alt="Profile" />))}
    <Grid item>
      <h1 style={{margin:0, marginLeft: 20}}>
      <Popup trigger={<a>{props.title}</a>}    
        modal
        closeOnDocumentClick>
        <div className="modal">
          <div className="header"> Seller's Information </div>
          <Grid container justify="center" direction="column">
              {' '}
              <h3 style ={{}}>
                Name: {props.name} <br/> 
                Email: {props.email} <br/> 
                </h3>  
                <h3 style ={{margin:0,textTransform:"capitalize"}}>
                  School: {(props.school).replace(/[^a-zA-Z ]/g, " ").toLowerCase()}
                </h3>  
                
          </Grid>
    
        </div>

      
      </Popup></h1>

      
      <p style={{margin:0, marginLeft: 20}}> by {props.author}</p>
      <p style={{margin:0, marginLeft:20, textTransform:"capitalize"  }}> <b>Condition:</b> {(props.condition).replace(/[^a-zA-Z ]/g, " ").toLowerCase()}</p>
      <p style={{margin:0, marginLeft:20, textTransform:"capitalize"  }}> <b>Category: </b>{(props.category).replace(/[^a-zA-Z ]/g, " ").toLowerCase()}</p>
      <h2 style={{marginLeft: 20,}}>${props.price}</h2>
      
    </Grid>
  </Grid>

);

export default ListItem;
