export default class NotesAPI {
  //全てのメモを取得
  static  getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes;
  }

  //メモを保存するAPI
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    const existingNotes = notes.find((note) => note.id == noteToSave.id);

  //編集、更新
    if(existingNotes) {
      existingNotes.title = noteToSave.title;
      existingNotes.body = noteToSave.body;
      existingNotes.update = new Date().toISOString();
    } else {
      // noteToSave.id = Math.floor(Math.random() + 100000);
      // noteToSave.update = new Date().toISOString();
      // notes.push(noteToSave);
      noteToSave.id = noteToSave.id;
      noteToSave.update = new Date().toISOString();
      notes.push(noteToSave);
    }


    localStorage.setItem("notes", JSON.stringify(notes));
  }

  //メモを削除するAPI
  static deleteNote() {

  }
}
