import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

//db
import _db from "./_db.js";

//types
import {typeDefs} from './schema.js'

//resolvers
const resolvers = {
    Query: {
      games() {
        return db.games
      },
      authors() {
        return db.authors
      },
      reviews() {
        return db.reviews
      },
    }
  }

//server setup 
const server= new ApolloServer({
    //now what we need to do is that we have to define the types which can be written as typeDefs 
    typeDefs,
    resolvers  
});

const {url}= await startStandaloneServer(server,{
    listen: {port: 4000}
})

console.log('server is ready at', 4000);