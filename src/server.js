const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const uri = "mongodb+srv://aQHJxOWLVXeqMsRK:aQHJxOWLVXeqMsRK@cluster0.nqgzi.mongodb.net/graphql?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
})

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
  };

const options = {
  cors: corsOptions
};

server.start((options) => {
  console.log(`>>>>>> 🚀 Server up! http://localhost:${options.port}`)
})
