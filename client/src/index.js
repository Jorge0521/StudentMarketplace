import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo-client";
import BasicList from "./views/BasicList";

import "./styles.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>CRA Apollo – Basic Starter Template</h1>
        <p>Using the apollo-boost npm package</p>
        <BasicList />
      </div>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
