/* eslint-disable no-restricted-globals */
import React from 'react'
import Input from '../../hook/Input'
import {addNote} from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'

const Form = () => {
    const [ title, bindTitle, resetTitle ] = Input()
    const [ content, bindContent, resetContent ] = Input()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({title,content}))
        resetTitle();
        resetContent();
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                
                    <div className="input-field">
                    <input id="title" type="text" className="validate" {...bindTitle}/>
                    <label htmlFor="title">Title</label>
                    </div>
                    <div className="input-field">
                    <textarea id="content" className="materialize-textarea" {...bindContent}></textarea>
                    <label htmlFor="content">Content</label>
                    </div>
                    <button className="btn blue">Add</button>
            </form>
            
        </div>
    )
}

export default Form
