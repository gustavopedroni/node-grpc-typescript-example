import { INotesServer } from '../../proto/notes_grpc_pb'
import { Note,  NoteListResponse, Void } from '../../proto/notes_pb'
import { sendUnaryData,  ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js'

const notes: Note.AsObject[] = [
  { id: 1, title: 'Note 1', description: 'Content 1' },
  { id: 2, title: 'Note 2', description: 'Content 2' }
]

export class NotesServer implements INotesServer {
  list (_: ServerUnaryCall<Void, NoteListResponse>, callback: sendUnaryData<NoteListResponse>): void {
    const response = new NoteListResponse()

    notes.forEach((nodeInDatabase) => {
      const note = new Note()
      note.setId(nodeInDatabase.id)

      response.setNote(note)
    })
    
    callback(null, response)
  }

  [name: string]: UntypedHandleCall

}