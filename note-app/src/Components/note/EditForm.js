/* eslint-disable no-restricted-globals */
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateNote} from '../../store/actions/noteAction'
import Input from '../../hook/Input'
import {useHistory} from 'react-router-dom'



const EditForm = () => {
    const note = useSelector((state) => state.note)
    const [ title, bindTitle, resetTitle ] = Input(note.title)
    const [ content, bindContent, resetContent ] = Input(note.content)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({id: note.id, title,content}))
        resetTitle();
        resetContent();
        history.push('/')
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Update Note</h5>
                
                    <div className="input-field">
                    <input id="title" type="text" className="validate" {...bindTitle}/>
                    <label className="active" htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                    <textarea id="content" className="materialize-textarea" {...bindContent}></textarea>
                    <label className="active" htmlFor="content">Content</label>
                    </div>
                    <button className="btn blue">Update</button>
            </form>
            
        </div>
    )
}

export default EditForm
