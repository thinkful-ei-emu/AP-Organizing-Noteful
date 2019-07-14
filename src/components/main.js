import React from 'react';
import NoteList from './notelist';
import './styles/main.css'
import {Link} from 'react-router-dom'

function Main (props) {

    return(
        <div>
            <NoteList match={props.match}/>
            <Link to='/addnote'>
            <button className="add-note">Add Note</button>
            </Link>
        </div>
    )
}

export default Main