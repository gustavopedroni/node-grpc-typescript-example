// package: 
// file: notes.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Note extends jspb.Message { 
    getId(): number;
    setId(value: number): Note;
    getTitle(): string;
    setTitle(value: string): Note;
    getDescription(): string;
    setDescription(value: string): Note;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Note.AsObject;
    static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Note;
    static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
    }
}

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}

export class NoteListResponse extends jspb.Message { 

    hasNote(): boolean;
    clearNote(): void;
    getNote(): Note | undefined;
    setNote(value?: Note): NoteListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoteListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NoteListResponse): NoteListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoteListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoteListResponse;
    static deserializeBinaryFromReader(message: NoteListResponse, reader: jspb.BinaryReader): NoteListResponse;
}

export namespace NoteListResponse {
    export type AsObject = {
        note?: Note.AsObject,
    }
}
