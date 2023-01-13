// package: 
// file: notes.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as notes_pb from "./notes_pb";

interface INotesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: INotesService_IList;
}

interface INotesService_IList extends grpc.MethodDefinition<notes_pb.Void, notes_pb.NoteListResponse> {
    path: "/Notes/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<notes_pb.Void>;
    requestDeserialize: grpc.deserialize<notes_pb.Void>;
    responseSerialize: grpc.serialize<notes_pb.NoteListResponse>;
    responseDeserialize: grpc.deserialize<notes_pb.NoteListResponse>;
}

export const NotesService: INotesService;

export interface INotesServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<notes_pb.Void, notes_pb.NoteListResponse>;
}

export interface INotesClient {
    list(request: notes_pb.Void, callback: (error: grpc.ServiceError | null, response: notes_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    list(request: notes_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notes_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    list(request: notes_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notes_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
}

export class NotesClient extends grpc.Client implements INotesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: notes_pb.Void, callback: (error: grpc.ServiceError | null, response: notes_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    public list(request: notes_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notes_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
    public list(request: notes_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notes_pb.NoteListResponse) => void): grpc.ClientUnaryCall;
}
