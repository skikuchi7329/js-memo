import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());

    //最初に必ず呼ばれる関数
    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NotesAPI.getAllNotes();
    console.log(notes);

    this._setsNotes(notes);

    if(notes.length > 0) {
      this._setActiveNote(notes[0]);
    }
  }

  _setActiveNote(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _setsNotes(notes) {
    this.notes = notes;
    this.view.updateNoteList(notes);
  }

  _handlers() {
    return {
      onNoteSelect: (noteId) => {
        console.log(noteId + "のノートが選択されました");
        const selectedNote = this.notes.find((note) => note.id == noteId);
        this._setActiveNote(selectedNote);
      },
      onNoteAdd: () => {
        console.log("ノートが追加されました");
      },
      onNoteEdit: (title, body) => {
        console.log(title);
        console.log(body);
      },
      onNoteDelete: (noteId) => {
        console.log(noteId + "のノートが削除されました");
      },
    };
  }
}
