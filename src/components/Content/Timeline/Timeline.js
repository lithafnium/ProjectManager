import React from 'react'
import { TimelineContainer, TaskContainer, Row } from './Styles'
import Date from './Components/Date/Date'
import Task from './Components/Task/Task'

const Timeline = () => { 
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