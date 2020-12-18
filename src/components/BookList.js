import React,{useContext} from 'react';
import {bookContext} from '../context/Context';
import BookDetails from './BookDetails'

function BookList() {
    const {books} = useContext(bookContext)
    return books.length ?(
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return(
                        <BookDetails key={book.id} book={book}/>
                    )
                })}
            </ul>
        </div>
    ):(
        <div className="empty">
            Ya pas de livre a lire !!
        </div>
    )
}

export default BookList
