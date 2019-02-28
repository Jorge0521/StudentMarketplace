import React from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";

const createBook = gql`
  mutation CreateItem($data: PingPongTeamCreateInput!) {
    createPingPongTeam(data: $data) {
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