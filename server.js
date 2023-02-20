// Create a new server app with express
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'

const app = express()
const httpServer = http.createServer(app)

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(3000, () => {
	console.log('Server is listening on port 3000')
})
