import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import 'dotenv/config'
import { authRoutes } from './routes/auth'
import fastifyJwt from '@fastify/jwt'
import fastifyMultipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import fastifyStatic from '@fastify/static'
import { resolve } from 'path'
const app = fastify()

app.register(fastifyStatic,{
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads'
})
app.register(fastifyMultipart)
app.register(fastifyJwt, {
  secret: 'ohgawrehgurwehguRWEHUGO',
})

app.register(cors, {
  origin: true,
})
app.register(uploadRoutes)
app.register(memoriesRoutes)
app.register(authRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('server listening on port 3333')
  })
  .catch(() => {
    console.log('error')
  })
