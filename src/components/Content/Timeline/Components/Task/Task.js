import React, {useEffect, useState} from 'react'
import { TaskDiv, TaskItem } from './Styles'
import { Resizable } from "re-resizable";



const Task = () => {
    const [taskWidth, setWidth] = useState(120)

    const style = {
        left: "105px",
        height: "35px",
        backgroundColor: "#F65889",
        borderRadius: "25px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        display: "flex",
        alignItems: "center",
        margin: "15px 0px 15px 0px" 
    }

    return(
        <Resizable style = {style} 
                   size={{ width: taskWidth, height: 35}}
                   maxHeight = {35}
                   minHeight = {35}
                   grid = {[30, 1]}
                   onResizeStop={(e, direction, ref, d) => {
                    setWidth(taskWidth + d.width);
                   }}
        >
                <TaskItem>Testing</TaskItem>
        </Resizable>
    )
} 

export default Task