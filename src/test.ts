import { randomUUID } from 'crypto'

import type { DeepPartial } from '@src/@types'

import { GenerateReportRequest, ReportClient, ReportType } from '@proto/report'

export async function createReport(client: ReportClient) {
  const response = await client.create({
    area: '',
    fileName: '',
    generateParams: {},
    name: 'AAA',
    type: ReportType.XLSX,
  })

  console.log('createReport:', { response })
}

async function* createReportRequest(): AsyncIterable<
  DeepPartial<GenerateReportRequest>
> {
  for (let i = 0; i < 10; i++) {
    yield {
      id: randomUUID(),
      data: [
        {
          aaa: i,
        },
      ],
    }
  }
}

export async function generateReport(client: ReportClient) {
  const response = await client.generate(createReportRequest())

  console.log('generateReport:', { response })
}
