import { createChannel, createClient } from 'nice-grpc'

import { createReport, generateReport } from '@src/test'

import { ReportClient, ReportDefinition } from '@proto/report'

const channel = createChannel('0.0.0.0:15055')
const client: ReportClient = createClient(ReportDefinition, channel)

async function boostrap() {
  await createReport(client)
  await generateReport(client)
}

boostrap()
