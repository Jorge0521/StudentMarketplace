import React from "react";
import Grid from '@material-ui/core/Grid';
import ListItem from "../components/ListItem";
import { Link } from 'react-router-dom'
import gql from "graphql-tag";
import { Query } from "react-apollo";


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
        category
        condition
    }
    photos{
        id
        url
    }
   }
  }
`;

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
                    {itemsArray.map((o,i) => 
                       ( <ListItem
                                key={o.id}
                                title={o.bookDetails.title}
                                author={o.bookDetails.author}
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
                );
        }}
            </Query>
          </div>
        )
    }
}

export default Books