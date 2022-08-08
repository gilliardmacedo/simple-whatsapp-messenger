import { db } from 'src/lib/db'

export const messages = () => {
  return db.message.findMany()
}

export const createMessage = ({ input }) => {
  return db.message.create({
    data: input,
  })
}
