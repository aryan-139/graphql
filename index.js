import { ApolloServer } from "@apollo/server";
import {startStandAloneServer} from '@apollo/server/standalone'
import {typeDefs} from './schema.js'
//server setup 

const server= new ApolloServer({
    //now what we need to do is that we have to define the types which can be written as typeDefs 
    typeDefs,
    //resolvers 
});

const {url}= await startStandAloneServer(server,{
    listen: {port: 4000}
})

console.log('server is ready at', 4000);

