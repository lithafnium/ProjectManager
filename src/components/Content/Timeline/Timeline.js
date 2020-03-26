import React, { useContext, useState, useEffect } from 'react'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Draggable from 'react-draggable'
import Date from './Components/Date/Date'
import Task from './Components/Task/Task'
import { TimelineContainer, TaskContainer, Row } from './Styles'
import { AppContext } from './../../../Context'




const Timeline = () => {
    const { tasks, currentProject } = useContext(AppContext)
    const [zindex, setzindex] = useState("0px")
    // TODO: add width to task info 
    useEffect(() => {

    }, [])
    return (
        <TimelineContainer >
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <Date />
            <TaskContainer id="taskcontainer">
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }}>
                    {tasks.map(t => {
                        return t.project === currentProject &&
                            <Task
                                taskName={t.info["taskName"]}
                                id={t.info["id"]}
                                color={t.color}
                            />

                    })}
                </CSSTransitionGroup>

            </TaskContainer>


        </TimelineContainer>
    )
}

export default Timeline