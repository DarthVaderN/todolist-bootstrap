import React, {Fragment,useContext,useEffect} from 'react';
import {Form} from '../component/Form';
import { Notes } from '../component/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Loader } from '../component/Loader';

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    },[])
    return (
    <Fragment>
        <Form />
            <hr/>
            {loading ? <Loader /> :<Notes notes = {notes} onRemove={removeNote} /> }
        
    </Fragment>
    )
}