export const addNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite:false,
            createAt: new Date()
        })
        .then(()=>{
            console.log('add the note successfully')
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const deleteNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
        .then(()=>{
            console.log('delete the note successfully')
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const toggleFavorite = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const favstats = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favstats
        }).then(() => {
            console.log('Toggle favorite success')
        }).catch(err =>{
            console.log(err)
        })
    }
}

export const updateNote = (note) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        }).then(() => {
            console.log('Note has been edited')
        }).catch(err =>{
            console.log(err)
        })
    }
}