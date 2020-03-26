import React, { useEffect, useState, useRef, useContext } from 'react'
import Draggable from 'react-draggable'
import { Rnd } from "react-rnd"
import { TaskItem, OptionsDiv, Delete, Divider, ColorPicker, Color } from './Styles'
import { Resizable } from "re-resizable";
import { CSSTransitionGroup } from 'react-transition-group'
import MaterialIcon from 'material-icons-react'
import { AppContext, DELETE_TASK, EDIT_TASK } from './../../../../../Context'

const Task = ({ taskName, id, color }) => {
    const [taskWidth, setWidth] = useState(120)
    const [disabled, setDisabled] = useState(false)
    const [showOptions, toggleOptions] = useState(false)
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const [deltaPosition, setDeltas] = useState({ x: 0, y: 0 })
    const [resizePosition, setResizePosition] = useState({x: 0, y:0})
    const wrapperRef = useRef(null)
    const { tasksDispatch } = useContext(AppContext)


    const taskStyle = {
        height: "35px",
        backgroundColor: color,
        borderRadius: "25px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        display: "flex",
        alignItems: "center",
        transition: "0.15s",
        margin: "15px 0px 15px 0px",
    }

    const options = e => {
        e.preventDefault()
        setx(e.clientX)
        sety(e.clientY)
        toggleOptions(true)
    }

    const handleClickOutside = e => {

        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            toggleOptions(false)
        }
    }

    const setColor = c => {
        tasksDispatch({ action: EDIT_TASK, payload: { color: c, id } })
    }

    const deleteTask = () => {
        tasksDispatch({ action: DELETE_TASK, payload: id })
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
        <div>
            <Rnd
                style={taskStyle}
                size={{ width: taskWidth, height: 35 }}
                maxHeight={35}
                minHeight={35}
                resizeGrid={[30, 1]}
                dragGrid = {[30, 50]}
                bounds= "#taskcontainer"
                disableDragging = {disabled}
                onResizeStop={(e, direction, ref, d) => {
                    // setDisabled(!disabled)
                    setWidth(taskWidth + d.width);
                }}
                onContextMenu={e => options(e)}
                handleStyles={{ top: null, bottom: null }}>
                    <div ref={wrapperRef}>
                        <TaskItem>{taskName}</TaskItem>
                    </div>
            </Rnd>

            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
                {showOptions &&
                    <OptionsDiv x={x} y={y} taskWidth={taskWidth}>
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

                    </OptionsDiv>}
            </CSSTransitionGroup>
        </div>
    )
}

export default Task