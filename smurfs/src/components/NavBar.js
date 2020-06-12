import React, {useState, useContext} from 'react'
import {SmurfContext} from './SmurfContext'
import styled from 'styled-components'

export const NavBar = () => {
    const [smurf, setSmurf] = useContext(SmurfContext)
    const [count] = useState(0)
    return (
        <MainDiv>
            <h2>Smurfs Up</h2>
        {/* <p>Smurf Village Count: {smurf.map(item => {count + 1} )}</p> */}

        </MainDiv>
    )
}

const MainDiv = styled.div`
    background-color: rgb(45,45,54)

`