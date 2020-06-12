import React, {useContext} from 'react'
import styled from 'styled-components'
import {SmurfContext} from './SmurfContext'

export const SmurfCount = (props) => {
    const {smurf} = props
    console.log(smurf)
    return (

        <MainDiv>
            <h2>{smurf}</h2>
            {/* <p>{smurf.age}</p>
            <p>{smurf.height}</p> */}
        </MainDiv>
    )
}

const MainDiv = styled.div`

`