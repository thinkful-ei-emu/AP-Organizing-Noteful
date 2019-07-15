import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/mainsidebar.css'
import StoreContext from '../context/StoreContext'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MainSideBar extends React.Component {

    static contextType = StoreContext;

    render(){

    
    const folderList = this.context.folders.map(folder => {
        return(
            <li key={folder.id} className="nav-list">
                <NavLink to={`/folder/${folder.id}`} style={{ textDecoration: 'none' }}>
                  {folder.name}
                </NavLink>
            </li>
        )
    })
    return (
        <div className="nav-container">
            <nav>
                {folderList}
            </nav>
            <Link to="/addfolder">
            <button className="add-button" >Add Folder</button>
            </Link>
        </div>
    )
}

}

MainSideBar.propTypes = {
    folders: PropTypes.array
};


export default MainSideBar;