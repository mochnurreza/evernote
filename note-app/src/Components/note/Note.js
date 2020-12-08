import React from 'react'
import {deleteNote, toggleFavorite} from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'


const Note = ({note}) => {
    const dispatch = useDispatch()
    const deleteNoteHandler = ()=> {
        dispatch(deleteNote(note))
    }
    const togglFavoriteHandler = () => {
        dispatch(toggleFavorite(note))
    }
    const editnoteHandler = () => {
        dispatch({type:'EDIT_NOTE', payload: note})
    }
    const heartMarkup = note.favorite?'favorite':'favorite_border'
    return (
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={togglFavoriteHandler}>{heartMarkup}</i>
                <i className="material-icons" style={{cursor:'pointer'}} onClick={deleteNoteHandler}>delete</i>
            </div>
            <Link to={"/note/" + note.id}>
                <h5 className="black-text">{note.title}</h5>
            </Link>   
            <p className="truncate">{note.content}</p>
            <p className="grey-text">{moment(note.createAt.toDate()).fromNow()}</p>
            <Link to={`/editform/${note.id}`}>
            <div className="right-align"><i className="material-icons black-text" style={{cursor:'pointer'}} 
            onClick={editnoteHandler}>edit</i>
            </div>
            </Link>
        </div>
    )
}

export default Note
