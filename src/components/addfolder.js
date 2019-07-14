import React from 'react'


function AddFolder() {

        return(
            <form>
                <label>New Folder Name:</label>
                <input type="text" placeholder="New Folder"/>
                <button type="submit">Add New Folder</button>
            </form>
        );
    }



export default AddFolder;