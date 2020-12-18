import React,{useContext,useState} from 'react'
import { bookContext } from '../context/Context'

function BookForm() {
    // const {addBook} = useContext(bookContext);
    const {dispatch} = useContext(bookContext);
    const [title,setTitle] = useState('');
    const [autheur,setAuteur] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(title,autheur);
        //addBook(title,autheur);
        dispatch({type:'ADD_BOOK',book:{
            title,autheur
        }});
        setTitle('');
        setAuteur('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titre du livre" value={title}
            onChange={(e) => setTitle(e.target.value)} required
            />

            <input type="text" placeholder="Auteur du livre" value={autheur}
            onChange={(e) => setAuteur(e.target.value)} required
            />

            <input type="submit" value="Ajouter livre"/>
        </form>
    )
}




export default BookForm
