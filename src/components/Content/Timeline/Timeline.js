import React, { useState } from 'react'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Date from './Components/Date/Date'
import Task from './Components/Task/Task'
import { TimelineContainer, TaskContainer, Row } from './Styles'



const Timeline = () => { 
    const [showOptions, toggleOptions] = useState(false)
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    return(
        <TimelineContainer>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
            <TaskContainer>
                <Row><Task/></Row>
                <Row><Task/></Row>
                <Row><Task/></Row>
            </TaskContainer>
            

        </TimelineContainer>
    )
}

export default Timeline