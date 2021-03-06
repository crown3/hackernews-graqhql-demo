import jwt from 'jsonwebtoken'
import { Context } from './resolvers/types/Context'

export const APP_SECRET = 'GraphQL-is-aw3some'

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET) as { userId: string }
    return userId
  }

  throw new Error('Not authenticated')
}
