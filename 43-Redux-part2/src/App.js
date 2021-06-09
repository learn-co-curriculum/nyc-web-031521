import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import { useSelector, useDispatch } from 'react-redux'


function App(){

  // const [display, changeDisplay] = useState(false)
  // const [toys, setToys] = useState([])

  // to access value from the redux store
  const count = useSelector((state) => state.countReducer.count)
  const toys = useSelector((state) => state.toyReducer.toys)
  const display = useSelector((state) => state.toyReducer.display)

  // dispatch action to store to change value of state
  const dispatch = useDispatch()


  useEffect(() => {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    // .then(json => setToys(json))
    .then(json => dispatch({type: "setToys", payload: json}))
  }, [])

  let handleClick = () => {
    dispatch({type: "changeDisplay"})
  }

  let handleSubmit = (e, newToy) => {
    e.preventDefault()
    e.target.reset()

    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...newToy, likes: 0})
    })
    .then(resp => resp.json())
    .then(newToy => dispatch({type: "addAToy", payload: newToy}))
  }

  let handleDelete = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(json => {
      console.log(`Deletion of ${id} was great success!`)
      
      const newToys = toys.filter(toy => {
        return toy.id !== id
      })

      dispatch({type: "deleteAToy", payload: newToys})
      }
    )
  }

  let handleLike = (id, newLikes) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({likes: newLikes + 1})
    })
    .then(resp => resp.json())
    .then(json => {

      const newToys = toys.map(toy => {
        return toy.id === id ? json : toy
      })

      dispatch({type: "addALike", payload: newToys})
      }
    )
  }  

    return (
      <div>
        <Header/>

        <h3>Current count value: {count} </h3>
        <button onClick={() => dispatch({type:"inc", payload: 3})}> 
          increment count by 3
        </button>

        <button onClick={() => dispatch({type:"dec"})}> 
          decrement count by 2
        </button>

        { display
            ?
          // <ToyForm />
          <ToyForm handleSubmit={handleSubmit}/>
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={handleClick}> Add a Toy </button>
        </div>
        {/* <ToyContainer toys={toys}  /> */}
        <ToyContainer handleLike={handleLike} handleDelete={handleDelete} toys={toys}/>

      </div>
    );

}

export default App;
