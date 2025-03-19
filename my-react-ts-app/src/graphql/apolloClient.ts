import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://your-graphql-endpoint.com',
    cache: new InMemoryCache()
})