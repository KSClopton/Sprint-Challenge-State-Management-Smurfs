import React, {useState, useContext} from 'react'
import {SmurfContext} from './SmurfContext'
import Axios from 'axios'


export const InputForm = (props) => {
    const {handleChanges, handleSubmit, formValues} = props
    const [smurfs, setSmurfs] = useContext(SmurfContext)

    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={formValues.name}
            placeholder='Name'
            name='name'
            onChange={handleChanges}
            />
             <input 
            value={formValues.age}
            placeholder='Age'
            name='age'
            onChange={handleChanges}
            />
             <input 
            value={formValues.height}
            placeholder='Height'
            name='height'
            onChange={handleChanges}
            />



        </form>
    )
}