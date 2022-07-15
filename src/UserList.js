import { useState,useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function List() {
    const [ listOfUSer, setListOfUSer] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res)
        setListOfUSer(res.data)
      })
      .catch(error =>{
        console.log(error)})  
        },[])

    return(
        <div className="container">
          <ul className="list-group">
            {listOfUSer.map(user => (<li className="list-group-item list-group-item-action" key={user.id}>{user.name}</li>))}
          </ul>
        </div>
    )
}

export default List