import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from "react-apollo";


const createBook = gql`
    mutation CreateItem($data: ItemCreateInput!) {
        createItem(data: $data) {
         id
        }
    }
`;

const getData = gql`
  query {
    office(officeId: "5c13f54024aa9a0007317221") {
      heroes {
        player {
          hero {
            name
          }
          id
        }
      }
    }
  }
`;


const CreateBook = () => {
  let input;

  return (
    <Mutation mutation={createBook}>
      {(createItem, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createItem({ variables: { data: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};



export default CreateBook
