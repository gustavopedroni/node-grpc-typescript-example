import { createServer } from 'nice-grpc'

import { ReportServiceImpl } from '@src/services/report'

import { ReportDefinition } from '@proto/report'

async function boostrap() {
  const server = createServer()

  server.add(ReportDefinition, new ReportServiceImpl())

  const address = '0.0.0.0:15055'

  await server.listen(address)
  console.log(`gRPC server is running on ${address}`)
}

boostrap()
