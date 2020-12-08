import React from 'react'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
import NotesList from './NotesList'

const Favorite = () => {
    useFirestoreConnect([{collection:'notes', where:['favorite', '==', true], orderBy:['createAt', 'desc'], storeAs:'favorite'}])
    const favorite = useSelector(state => state.firestore.ordered.favorite)
    console.log('favorite', favorite)
    return (
        <div>
            <NotesList notes={favorite}/>
        </div>
    )
}

export default Favorite
