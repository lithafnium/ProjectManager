import React, { useContext, useState, useEffect, useRef } from 'react'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Date from './Components/Date/Date'
import Task from './Components/Task/Task'
import { TimelineContainer, TaskContainer } from './Styles'
import { AppContext } from './../../../Context'




const Timeline = () => {
    const { tasks, currentProject } = useContext(AppContext)
    // TODO: add width to task info 
    useEffect(() => {

    }, [])
    return (
        <TimelineContainer>
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
                                taskWidth = {t.taskWidth}
                                x = {t.x}
                                y = {t.y}
                            />

                    })}
                </CSSTransitionGroup>

            </TaskContainer>


        </TimelineContainer>
    )
}

export default Timeline