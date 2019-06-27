import { buildSchema } from 'graphql';

export default buildSchema(`
type User {
    _id: ID!
    email: String!
    username: String!
    firstname: String!
    lastname: String!
    token: String!
}
type RootQuery {
    Users: [User!]!
    getProfile(token: String!): User
}
type RootMutation {
    tokenAuth(email: String!, password: String!): User
    createUser(email: String!, password: String!, confirm: String!,username: String!,firstname: String!,lastname: String!): User
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`)