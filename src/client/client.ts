import ApolloClient from "apollo-boost";
import defaults from "./defaults"
import resolvers from "./resolvers"
import typeDefs from "./typeDefs"

const client = new ApolloClient({
    uri: "https://mixcloud-favorites-hfenubcgct.now.sh",
    clientState: {
        defaults,
        resolvers,
        typeDefs,
    }
});

export default client;