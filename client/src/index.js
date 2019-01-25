import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo-client";
import BasicList from "./views/BasicList";
import Homepage from "./views/HomePage"

import "./styles.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Homepage/>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
