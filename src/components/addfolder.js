import React from 'react'
import StoreContext from '../context/StoreContext'
import './styles/addfolder.css';

class AddFolder extends React.Component {

    static contextType = StoreContext;

    render(){

        return(
            <form onSubmit={e => this.context.newFolder(e)}>
                <label htmlFor="new-folder" className="new-folder-label">New Folder Name:</label>
                <input
                    type="text" 
                    id="newFolder"
                    name="newFolder"
                    placeholder="New Folder"
                    onChange={e => this.context.newFolderName(e.target.value)}
                    required
                    className="new-folder-input"
                    aria-label="Add a New Folder"
                    aria-required="true"
                />
                <button type="submit">Add New Folder</button>
            </form>
        );
    }
}



export default AddFolder;