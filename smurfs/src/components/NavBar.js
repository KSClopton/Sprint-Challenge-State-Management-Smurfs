import React, {useState, useContext} from 'react'
import {SmurfContext} from './SmurfContext'
import styled from 'styled-components'

export const NavBar = () => {
    const [smurfs, setSmurfs] = useContext(SmurfContext);
    console.log(smurfs)
    return (
        <MainDiv>
            <h2>Smurfs Up</h2>
            <p>Smurf Village Count: {smurfs.length}</p>

        </MainDiv>
    )
}

const MainDiv = styled.div`
    background-color: rgb(0, 150, 197);
    display: flex;
    justify-content: space-between;
    
    h2{
        padding-left: 5%;
    }
    p{
        padding-right: 5%;
    }
`