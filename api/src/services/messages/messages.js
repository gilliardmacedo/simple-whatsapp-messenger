import axios from 'axios'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const PAGE_SIZE = 10

export const messages = () => {
  return db.message.findMany({
    take: PAGE_SIZE,
    skip: 0,
    orderBy: { createdAt: 'desc' },
  })
}

export const createMessage = async ({ input }) => {
  const message = {
    message: input.message,
    destination: input.destination.replace(/\D/g, ''),
  }
  const response = await axios.post(process.env.MESSAGE_SERVICE_URL, message)
  const saved = db.message.create({
    data: message,
  })
  logger.info(`Message sent. Response status: ${response.status}`)
  return saved
}
