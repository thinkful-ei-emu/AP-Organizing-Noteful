import React from "react";
import "./styles/addnote.css";
import StoreContext from "../context/StoreContext";

class AddNote extends React.Component {
  static contextType = StoreContext;

  render() {
    return (
      <form onSubmit={e => this.context.newNote(e)}>
        <label htmlFor="new-note-name">Name:</label>
        <input
          type="text"
          name="new-note-name"
          placeholder="New Note"
          onChange={e => this.context.newNoteName(e.target.value)}
        />

        <label htmlFor="new-note-content">Content:</label>
        <input
          type="text"
          name="new-note-content"
          placeholder="Blah Blah Blah"
          onChange={e => this.context.newNoteContent(e.target.value)}
        />

        <label htmlFor="new-note-folder">Folder:</label>
        <select onChange={e => this.context.newNoteFolder(e.target.value)}>
          <option value="Pick an Existing Folder">
            Pick an Existing Folder
          </option>

          {this.context.folders.map(folder => (
            <option key={folder.id} value={folder.id}>
                {folder.name}
                </option>
          ))}

        </select>
        

        <button type="submit">Add New Note</button>
      </form>
    );
  }
}

export default AddNote;
