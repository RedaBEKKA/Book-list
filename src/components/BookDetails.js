import React,{useContext} from 'react';
import {bookContext} from '../context/Context'

function BookDetails({book}) {
//const {removeBook} = useContext(bookContext);
const {dispatch} =useContext(bookContext);
    return (
        //<li onClick={() => removeBook(book.id)}>
        <li onClick={() => dispatch({type:'REMOVE_BOOK',id:book.id})}>  
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}

export default BookDetails
