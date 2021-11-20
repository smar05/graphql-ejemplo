import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = "type Query{hello:String MiNumber:Int}";

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
