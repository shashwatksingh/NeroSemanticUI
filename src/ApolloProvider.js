import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, createHttpLink } from '@apollo/client';
const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
});

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache()
});
// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

export default(
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>
)