import React from "react";
import { Query } from "react-apollo";
import ListItem from "../components/ListItem";
import gql from "graphql-tag";

const MY_QUERY = gql`
  query {
   user(
     email: "jorge@novvum.io"
   ){
     id
     name
      email
      profilePhoto {
        id
        url
      }
   }
  }
`;

const BasicList = props => (
  <div className="section">
    <Query query={MY_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const { id, name, email, profilePhoto} = data.user;
        return (
          <div className="list">
            
              <ListItem
                key={id}
                title={name}
                subtitle={email}
                image={profilePhoto.url}
              />
          </div>
        );
      }}
    </Query>
  </div>
);

export default BasicList;
