import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p10yjb1gla01ywbqum4vlt/master',
    cache: new InMemoryCache()
})