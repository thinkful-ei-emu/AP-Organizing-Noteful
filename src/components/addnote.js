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
          id="new-note-name"
          onChange={e => this.context.newNoteName(e.target.value)}
          required
          aria-label="Add a New Note"
           aria-required="true"
        />

        <label htmlFor="new-note-content">Content:</label>
        <input
          type="text"
          name="new-note-content"
          placeholder="Blah Blah Blah"
          id='new-note-content'
          onChange={e => this.context.newNoteContent(e.target.value)}
          aria-label="New Note Content"
        />

        <label htmlFor="new-note-folder" aria-label="Pick a Folder to Add the New Note to">Folder:</label>
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
        

        <button type="submit" className="add-note-button">Add New Note</button>
      </form>
    );
  }
}

export default AddNote;
