import React,{useContext} from 'react'
import {bookContext} from '../context/Context'
function Navbar() {
    const {books}= useContext(bookContext)
    return (
        <div className="navbar">
            <h1>Reda List</h1>
    <p>Maintenant vous avez {books.length} livres</p>
        </div>
    )
}

export default Navbar
