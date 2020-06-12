import React, { useState, Component, useContext, useEffect } from "react";
import "./App.css";
import { SmurfProvider, SmurfContext } from './SmurfContext'
import axios from 'axios'
import {NavBar} from './NavBar'
import {InputForm} from './InputForm'
import styled from 'styled-components'
import SmurfVillage from '../Images/SmurfVillage.jpg'
import { SmurfCount } from "./SmurfCount";

const initialForm = {name: '', height: '', age: ''}
// const smurfVillage = {name: '', height: '', age: ''}

function App() {
  const [smurfs, setSmurfs] = useContext(SmurfContext);
  const [formValues, setValues] = useState(initialForm);
  // const [smurfVillage, setSmurfVillage] = useState(smurfVillage)

  const handleSubmit = e => {
    const newSmurf = {
        name: formValues.name.trim(),
        age: formValues.age.trim(),
        height: formValues.height.trim()
    }
    postNewSmurf(newSmurf)
}

const handleChanges = e => {
  const name = e.target.name
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
      setSmurfs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const postNewSmurf = (newSmurf) => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
    })
    .catch(err => {
      console.log('Sorry, your post did not work')
    })
    .finally(() => {
      console.log("do this last")
    })
  }
  // const showSmurfs = () => {
  //   smurfs.map(item => 
  //     setSmurfVillage(item)
  //     )
  // }
  useEffect(() => {
    getSmurfs()
  }, [])
    return (
    
     
      <MainDiv className="App">
        <NavBar />
        <InputForm handleSubmit={handleSubmit} handleChanges={handleChanges} formValues={formValues}/>
        {!smurfs ? 'loading...' : smurfs.map(item => (
          <h2>{item.name}</h2>
        ))}
        {/* <button onClick={showSmurfs}>Get smurfs</button> */}
        {/* <SmurfCount smurf={showSmurfs}/> */}
        
      </MainDiv>
    
    );
  }

const MainDiv = styled.div`
    background-image:url(${SmurfVillage});
    background-size: cover;
    height: 550px;

`

export default App;
