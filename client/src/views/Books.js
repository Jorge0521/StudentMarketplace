import React from "react";
import Grid from '@material-ui/core/Grid';
import ListItem from "../components/ListItem";
import { Link } from 'react-router-dom'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import SearchEngine from '../components/SearchEngine'

import { 
  InstantSearch, Hits, 
  SearchBox, Highlight,
  RefinementList,Pagination,
  CurrentRefinements,
  ClearRefinements} from 'react-instantsearch-dom';
import { List } from "@material-ui/core";


const BOOK_QUERY = gql`
 query {
   items(listed:true){
       id
       price

    user{
        id
        name
        email
        school
    }
    bookDetails{
        id
        title
        author
        genre
        condition
    }
    photos{
        id
        url
    }
   }
  }
`;




function GetBook({ hit }) {
  return(
      <div>
        <div>{hit.title}</div>
        <img src={hit.image} align="left" alt={hit.title} />
        <div className="hit-name">
          <Highlight attribute="name" hit={hit.title} />
        </div>
        <div className="hit-price">${hit.price}</div>
      </div>
      )
}
class Books extends React.Component {
    render(){
        return(
            <div className="section">
            <Query query={BOOK_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                const itemsArray = data.items
                console.log(data.items)
                return (
                  <div className="list">
                    <SearchEngine/>
                  </div> 
                 /*
                  <div className="list">
                    {itemsArray.map((o,i) => 
                       ( <ListItem
                                key={o.id}
                                title={o.title}
                                author={o.author}
                                photos={o.photos}
                                price={o.price}
                                condition={o.bookDetails.condition}
                                category={o.bookDetails.category}

                                name={o.user.name}
                                email={o.user.email}
                                school={o.user.school}
                            />)
                              
                    )}
                    </div>
                    */
                );
        }}
            </Query>
          </div>
        )
    }
}

export default Books