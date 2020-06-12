import React, {useState, createContext} from 'react'

export const SmurfContext = createContext();

export const SmurfProvider = (props) => {
    const [smurfs, setSmurfs] = useState([])
    console.log(smurfs)

    return (

        <SmurfContext.Provider value={[smurfs, setSmurfs]} >
            {props.children}
        </SmurfContext.Provider>
    )

}

