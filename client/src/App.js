import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import About from "./pages/About"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// import Shop from "./pages/Shop";
// import About from "./pages/About";

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
        <Routes>
            <>
            <Route path="/" element={ <Landing /> }/>
            <Route path="/shop" element={ <Shop /> }/>
            <Route path="/about" element={ <About /> }/>
            </>
          </Routes>
        </Router>
    </ApolloProvider>
  );
}

export default App;