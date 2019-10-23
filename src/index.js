const { ApolloServer } = require("apollo-server");

const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: "J.K. Rowling"
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton"
    }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
    Query: { books: () => books }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: err => {
        if (err.originalError && err.originalError.error_message) {
            err.message = err.originalError.error_message;
        }

        return err;
    }
    //   formatResponse?: Function
});

server.listen(5001).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
