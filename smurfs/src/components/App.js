import React, { useState, Component, useContext, useEffect } from "react";
import "./App.css";
import { SmurfProvider, SmurfContext } from './SmurfContext'
import axios from 'axios'
import {NavBar} from './NavBar'
import {InputForm} from './InputForm'

const initialForm = {name: '', height: '', age: ''}

function App() {
  const [[smurfs], setSmurfs] = useContext(SmurfContext);
  const [test, setTest] = useState([])
  const [formValues, setValues] = useState(initialForm)

  const handleSubmit = e => {
    const newSmurf = {
        name: formValues.name.trim(),
        age: formValues.age.trim(),
        height: formValues.height.trim()
    }
    postNewSmurf(newSmurf)
}

const handleChanges = e => {
  const name = e.taget.name
  const value = e.target.value

  setValues({
      ...formValues,
      [name]: value
  })
}
  
  const getSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      // res.data = an array with one object
      // setSmurfs(res.data)
      // console.log(test)
      // setSmurfs(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const postNewSmurf = (newSmurf) => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      setSmurfs(res.data)
    })
    .catch(err => {
      console.log('Sorry, your post did not work')
    })
    .finally(() => {
      console.log("do this last")
    })
  }

  useEffect(() => {
    getSmurfs()
  }, [])
    return (
    <SmurfProvider>
     
      <div className="App">
        <NavBar />
        {!test ? 'loading...' : test.map(item => (
        <h2>{item.name}</h2>))}
        <InputForm handleSubmit={handleSubmit} handleChanges={handleChanges} formValues={formValues}/>
        <div>Welcome to your state management version of Smurfs!</div>
      </div>
    </SmurfProvider>
    );
  }


export default App;
