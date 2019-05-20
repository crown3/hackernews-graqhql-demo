import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (params: any) => {
    return {
      ...params,
      prisma,
    }
  },
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))
