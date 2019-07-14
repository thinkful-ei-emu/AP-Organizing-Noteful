import React from 'react';
import './styles/addnote.css'

function AddNote(){
    return(
        <form>
            <label>Name:</label>
            <input type="text" name="new-note-name" placeholder="New Note"/>

            <label>Content:</label>
            <input type="text" name="new-note-content" placeholder="Blah Blah Blah"/>

            <label>Pick an Existing Folder:</label>
            <select>
                <option></option>
            </select>

            <button type="submit">Add New Note</button>
        </form>
    )
}

export default AddNote;