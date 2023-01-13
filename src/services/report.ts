import { randomUUID } from 'crypto'

import { DeepPartial } from '@src/@types'

import {
  CreateReportRequest,
  CreateReportResponse,
  GenerateReportRequest,
  GenerateReportResponse,
  ReportServiceImplementation,
} from '@proto/report'

export class ReportServiceImpl implements ReportServiceImplementation {
  async generate(
    request: AsyncIterable<GenerateReportRequest>,
  ): Promise<DeepPartial<GenerateReportResponse>> {
    let id
    for await (const item of request) {
      id = item.id
    }

    return {
      id,
      finishedAt: new Date(),
    }
  }

  async create(
    request: CreateReportRequest,
  ): Promise<DeepPartial<CreateReportResponse>> {
    return CreateReportResponse.create({
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...request,
    })
  }
}
