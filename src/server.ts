import { promisify } from 'util'
import { Server, ServerCredentials } from '@grpc/grpc-js'
import { NotesServer } from './controllers/notes'
import { NotesService } from '../proto/notes_grpc_pb'

async function boostrap() {
  const server = new Server()
  server.addService(NotesService, new NotesServer())

  const bindPromise = promisify(server.bindAsync).bind(server)

  const port: number = await bindPromise('0.0.0.0:50052', ServerCredentials.createInsecure())
  console.log(`GRPC Server is listing on port ${port}`)
  server.start()

}

boostrap()