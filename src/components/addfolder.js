import React from 'react'
import StoreContext from '../context/StoreContext'


class AddFolder extends React.Component {

    static contextType = StoreContext;

    render(){

        return(
            <form onSubmit={e => this.context.newFolder(e)}>
                <label>New Folder Name:</label>
                <input
                    type="text" 
                    name="newFolder"
                    placeholder="New Folder"
                    onChange={e => this.context.newFolderName(e.target.value)}
                    required
                />
                <button type="submit">Add New Folder</button>
            </form>
        );
    }
}



export default AddFolder;