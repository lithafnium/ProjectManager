import React, { useEffect, useState, useContext } from 'react'
import { OptionsDiv, Delete, Divider, ColorPicker, Color } from './Styles'
import { AppContext, DELETE_TASK, EDIT_TASK } from './Context'
import MaterialIcon from 'material-icons-react'

const Options = ({ id }) => {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const { tasksDispatch } = useContext(AppContext)
    
    const setColor = c => {
        tasksDispatch({ action: EDIT_TASK, payload: { color: c, id } })
    }

    const deleteTask = () => {
        tasksDispatch({ action: DELETE_TASK, payload: id })
    }

    return (
        <OptionsDiv x={x} y={y} >
            <Delete onClick={() => deleteTask()}>
                <span className="nav-icon">
                    <MaterialIcon icon="delete" color='#92a1d5' />
                </span>
                <p>Delete</p>
            </Delete>
            <Divider />
            <ColorPicker>
                <Color onClick={() => setColor("#F65889")} color="#F65889" />
                <Color onClick={() => setColor("#688FEC")} color="#688FEC" />
                <Color onClick={() => setColor("#08E0C9")} color="#08E0C9" />
                <Color onClick={() => setColor("#B73EF3")} color="#B73EF3" />
                <Color onClick={() => setColor("#F8D055")} color="#F8D055" />
            </ColorPicker>

        </OptionsDiv>
    )
}