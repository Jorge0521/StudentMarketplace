import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo-client";
import Routes from "./components/Routes"
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
