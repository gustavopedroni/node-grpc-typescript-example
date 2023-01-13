/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Struct } from "./google/protobuf/struct";
import { Timestamp } from "./google/protobuf/timestamp";

export enum ReportType {
  XLSX = 0,
  UNRECOGNIZED = -1,
}

export function reportTypeFromJSON(object: any): ReportType {
  switch (object) {
    case 0:
    case "XLSX":
      return ReportType.XLSX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReportType.UNRECOGNIZED;
  }
}

export function reportTypeToJSON(object: ReportType): string {
  switch (object) {
    case ReportType.XLSX:
      return "XLSX";
    case ReportType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReportStatus {
  PROGRESS = 0,
  ERROR = 1,
  SUCCESS = 2,
  UNRECOGNIZED = -1,
}

export function reportStatusFromJSON(object: any): ReportStatus {
  switch (object) {
    case 0:
    case "PROGRESS":
      return ReportStatus.PROGRESS;
    case 1:
    case "ERROR":
      return ReportStatus.ERROR;
    case 2:
    case "SUCCESS":
      return ReportStatus.SUCCESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReportStatus.UNRECOGNIZED;
  }
}

export function reportStatusToJSON(object: ReportStatus): string {
  switch (object) {
    case ReportStatus.PROGRESS:
      return "PROGRESS";
    case ReportStatus.ERROR:
      return "ERROR";
    case ReportStatus.SUCCESS:
      return "SUCCESS";
    case ReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateReportRequest {
  name: string;
  type: ReportType;
  area: string;
  generateParams: { [key: string]: any } | undefined;
  fileName: string;
}

export interface CreateReportResponse {
  id: string;
  name: string;
  type: ReportType;
  area: string;
  generateParams: { [key: string]: any } | undefined;
  status: ReportStatus;
  fileName: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface GenerateReportRequest {
  id: string;
  data: { [key: string]: any }[];
}

export interface GenerateReportResponse {
  id: string;
  finishedAt: Date | undefined;
}

function createBaseCreateReportRequest(): CreateReportRequest {
  return { name: "", type: 0, area: "", generateParams: undefined, fileName: "" };
}

export const CreateReportRequest = {
  encode(message: CreateReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.area !== "") {
      writer.uint32(26).string(message.area);
    }
    if (message.generateParams !== undefined) {
      Struct.encode(Struct.wrap(message.generateParams), writer.uint32(34).fork()).ldelim();
    }
    if (message.fileName !== "") {
      writer.uint32(42).string(message.fileName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.area = reader.string();
          break;
        case 4:
          message.generateParams = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 5:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<CreateReportRequest, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<CreateReportRequest | CreateReportRequest[]>
      | Iterable<CreateReportRequest | CreateReportRequest[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [CreateReportRequest.encode(p).finish()];
        }
      } else {
        yield* [CreateReportRequest.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, CreateReportRequest>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<CreateReportRequest> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [CreateReportRequest.decode(p)];
        }
      } else {
        yield* [CreateReportRequest.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): CreateReportRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? reportTypeFromJSON(object.type) : 0,
      area: isSet(object.area) ? String(object.area) : "",
      generateParams: isObject(object.generateParams) ? object.generateParams : undefined,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
    };
  },

  toJSON(message: CreateReportRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = reportTypeToJSON(message.type));
    message.area !== undefined && (obj.area = message.area);
    message.generateParams !== undefined && (obj.generateParams = message.generateParams);
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  create(base?: DeepPartial<CreateReportRequest>): CreateReportRequest {
    return CreateReportRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateReportRequest>): CreateReportRequest {
    const message = createBaseCreateReportRequest();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.area = object.area ?? "";
    message.generateParams = object.generateParams ?? undefined;
    message.fileName = object.fileName ?? "";
    return message;
  },
};

function createBaseCreateReportResponse(): CreateReportResponse {
  return {
    id: "",
    name: "",
    type: 0,
    area: "",
    generateParams: undefined,
    status: 0,
    fileName: "",
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const CreateReportResponse = {
  encode(message: CreateReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.area !== "") {
      writer.uint32(34).string(message.area);
    }
    if (message.generateParams !== undefined) {
      Struct.encode(Struct.wrap(message.generateParams), writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.fileName !== "") {
      writer.uint32(58).string(message.fileName);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.area = reader.string();
          break;
        case 5:
          message.generateParams = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.fileName = reader.string();
          break;
        case 8:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<CreateReportResponse, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<CreateReportResponse | CreateReportResponse[]>
      | Iterable<CreateReportResponse | CreateReportResponse[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [CreateReportResponse.encode(p).finish()];
        }
      } else {
        yield* [CreateReportResponse.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, CreateReportResponse>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<CreateReportResponse> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [CreateReportResponse.decode(p)];
        }
      } else {
        yield* [CreateReportResponse.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): CreateReportResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? reportTypeFromJSON(object.type) : 0,
      area: isSet(object.area) ? String(object.area) : "",
      generateParams: isObject(object.generateParams) ? object.generateParams : undefined,
      status: isSet(object.status) ? reportStatusFromJSON(object.status) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: CreateReportResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = reportTypeToJSON(message.type));
    message.area !== undefined && (obj.area = message.area);
    message.generateParams !== undefined && (obj.generateParams = message.generateParams);
    message.status !== undefined && (obj.status = reportStatusToJSON(message.status));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
    return obj;
  },

  create(base?: DeepPartial<CreateReportResponse>): CreateReportResponse {
    return CreateReportResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateReportResponse>): CreateReportResponse {
    const message = createBaseCreateReportResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.area = object.area ?? "";
    message.generateParams = object.generateParams ?? undefined;
    message.status = object.status ?? 0;
    message.fileName = object.fileName ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseGenerateReportRequest(): GenerateReportRequest {
  return { id: "", data: [] };
}

export const GenerateReportRequest = {
  encode(message: GenerateReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.data) {
      Struct.encode(Struct.wrap(v!), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.data.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<GenerateReportRequest, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<GenerateReportRequest | GenerateReportRequest[]>
      | Iterable<GenerateReportRequest | GenerateReportRequest[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GenerateReportRequest.encode(p).finish()];
        }
      } else {
        yield* [GenerateReportRequest.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, GenerateReportRequest>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<GenerateReportRequest> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GenerateReportRequest.decode(p)];
        }
      } else {
        yield* [GenerateReportRequest.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): GenerateReportRequest {
    return { id: isSet(object.id) ? String(object.id) : "", data: Array.isArray(object?.data) ? [...object.data] : [] };
  },

  toJSON(message: GenerateReportRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.data) {
      obj.data = message.data.map((e) => e);
    } else {
      obj.data = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateReportRequest>): GenerateReportRequest {
    return GenerateReportRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenerateReportRequest>): GenerateReportRequest {
    const message = createBaseGenerateReportRequest();
    message.id = object.id ?? "";
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenerateReportResponse(): GenerateReportResponse {
  return { id: "", finishedAt: undefined };
}

export const GenerateReportResponse = {
  encode(message: GenerateReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.finishedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.finishedAt), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.finishedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  // encodeTransform encodes a source of message objects.
  // Transform<GenerateReportResponse, Uint8Array>
  async *encodeTransform(
    source:
      | AsyncIterable<GenerateReportResponse | GenerateReportResponse[]>
      | Iterable<GenerateReportResponse | GenerateReportResponse[]>,
  ): AsyncIterable<Uint8Array> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GenerateReportResponse.encode(p).finish()];
        }
      } else {
        yield* [GenerateReportResponse.encode(pkt).finish()];
      }
    }
  },

  // decodeTransform decodes a source of encoded messages.
  // Transform<Uint8Array, GenerateReportResponse>
  async *decodeTransform(
    source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>,
  ): AsyncIterable<GenerateReportResponse> {
    for await (const pkt of source) {
      if (Array.isArray(pkt)) {
        for (const p of pkt) {
          yield* [GenerateReportResponse.decode(p)];
        }
      } else {
        yield* [GenerateReportResponse.decode(pkt)];
      }
    }
  },

  fromJSON(object: any): GenerateReportResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      finishedAt: isSet(object.finishedAt) ? fromJsonTimestamp(object.finishedAt) : undefined,
    };
  },

  toJSON(message: GenerateReportResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.finishedAt !== undefined && (obj.finishedAt = message.finishedAt.toISOString());
    return obj;
  },

  create(base?: DeepPartial<GenerateReportResponse>): GenerateReportResponse {
    return GenerateReportResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenerateReportResponse>): GenerateReportResponse {
    const message = createBaseGenerateReportResponse();
    message.id = object.id ?? "";
    message.finishedAt = object.finishedAt ?? undefined;
    return message;
  },
};

export type ReportDefinition = typeof ReportDefinition;
export const ReportDefinition = {
  name: "Report",
  fullName: "grpc.report.Report",
  methods: {
    create: {
      name: "create",
      requestType: CreateReportRequest,
      requestStream: false,
      responseType: CreateReportResponse,
      responseStream: false,
      options: {},
    },
    generate: {
      name: "generate",
      requestType: GenerateReportRequest,
      requestStream: true,
      responseType: GenerateReportResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ReportServiceImplementation<CallContextExt = {}> {
  create(
    request: CreateReportRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateReportResponse>>;
  generate(
    request: AsyncIterable<GenerateReportRequest>,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GenerateReportResponse>>;
}

export interface ReportClient<CallOptionsExt = {}> {
  create(
    request: DeepPartial<CreateReportRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateReportResponse>;
  generate(
    request: AsyncIterable<DeepPartial<GenerateReportRequest>>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GenerateReportResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
