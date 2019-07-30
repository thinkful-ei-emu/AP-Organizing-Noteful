import React from "react";
import "./App.css";
// import store from './dummy-store';
import { Route } from "react-router-dom";
import Main from "./components/main";
import MainSideBar from "./components/mainsidebar";
import Header from "./components/header";
import Note from "./components/note";
import StoreContext from "./context/StoreContext";
import { withRouter } from "react-router-dom";
import AddFolder from "./components/addfolder";
import AddNote from './components/addnote'
import ErrorBoundryNotes from "./components/errorboundrynotes";

class App extends React.Component {
  state = {
    folders: [],
    notes: [],
    newFolderName: "",
    newNoteName: "",
    newNoteContent: "",
    newNoteFolder: "",
  };

  componentDidMount() {
    //fetch request
    fetch("https://evening-spire-18611.herokuapp.com/folders")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        this.setState({
          folders: resJson
        });
      })
      .catch(error => {
        console.log(error);
      });
    fetch("https://evening-spire-18611.herokuapp.com/notes")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        this.setState({
          notes: resJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete = noteId => {
    fetch(`https://evening-spire-18611.herokuapp.com/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    });

    console.log(this);

    let filterDeleted = this.state.notes.filter(note => note.id !== noteId);
    this.setState(
      {
        notes: filterDeleted
      },
      () => this.props.history.push("/")
    );
  };

  setNewFolderName = input => {
    this.setState({
      newFolderName: input
    });
  };

  handleAddNewFolder = e => {
    e.preventDefault();

    const newFolder = {
      folder_title: this.state.newFolderName
    };

    return fetch("https://evening-spire-18611.herokuapp.com/folders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newFolder)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        this.setState(
          {
            folders: [...this.state.folders, newFolder]
          },
          () => this.props.history.goBack()
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  setNewNoteName = input => {
    this.setState({
      newNoteName: input
    });
  };

  setNewNoteContent = input => {
    this.setState({
      newNoteContent: input
    });
  };

  setNewNoteFolder = input => {
    this.setState({
      newNoteFolder: input
    });
  };

  handleAddNewNote = e => {
    e.preventDefault();

    const newNote = {
      note_title: this.state.newNoteName,
      content: this.state.newNoteContent,
      folder_id: this.state.newNoteFolder,
      modified: new Date(),
    };

    return fetch("https://evening-spire-18611.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newNote)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        this.setState(
          {
            notes: [...this.state.notes, newNote]
          },
          () => this.props.history.push('/')
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          delete: this.handleDelete,
          newFolderName: this.setNewFolderName,
          newFolder: this.handleAddNewFolder,
          newNoteName: this.setNewNoteName,
          newNoteContent: this.setNewNoteContent,
          newNoteFolder: this.setNewNoteFolder,
          newNote: this.handleAddNewNote,
        }}
      >
        <div className="App">
          <Header />
          <Route exact path="/" component={MainSideBar} />

          <ErrorBoundryNotes>

          <Route exact path="/" component={Main} />
    
          <Route
            exact
            path="/folder/:folderId"
            render={props => (
              <>
                <MainSideBar match={props.match} />
                <Main match={props.match} />
              </>
            )}
          />
          <Route exact path="/note/:noteId" component={Note} />
          
          </ErrorBoundryNotes>

          <Route exact path="/addfolder" component={AddFolder} />

          <Route exact path="/addnote" component={AddNote} />

        </div>
      </StoreContext.Provider>
    );
  }
}

export default withRouter(App);
