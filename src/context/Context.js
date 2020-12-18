import React,{createContext,useState,useReducer,useEffect} from 'react'
import uuid from 'uuid/v1'
import { bookReducer } from '../reducers/bookReducer';
export const bookContext = createContext();
 
// function BookContextProvider(props) {
    
//        const [books,setBook] = useState([
//            {title:"Tamachahout n mama jaja",author:"Djamila HAMDAOUI ",id:1},
//            {title:"Python selon BigNova",author:"BigNova",id:2}
//        ])

//        const addBook = (title,author) =>{
//            setBook([...books,{title,author:author,id:uuid()}])
//        }
//        const removeBook = (id) =>{
//            setBook(books.filter(book=>{
//               return book.id !== id 
//            }))
//        }

//        return(
//            <bookContext.Provider value={{books,addBook,removeBook}}>
//                 {props.children}
//            </bookContext.Provider>
//        )
    
// }


function BookContextProvider(props) {
    
    const [books,dispatch] = useReducer(bookReducer,[] , () => {
        const localData = localStorage.getItem('livres');
        return localData ? JSON.parse(localData) : []
    }) 

    useEffect(() => {
        localStorage.setItem('livres',JSON.stringify(books))
    },[books])
   

    return(
        <bookContext.Provider value={{books,dispatch}}>
             {props.children}
        </bookContext.Provider>
    )
 
}

export default BookContextProvider;