import React, { useContext } from 'react'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Date from './Components/Date/Date'
import Task from './Components/Task/Task'
import { TimelineContainer, TaskContainer, Row } from './Styles'
import { AppContext } from './../../../Context'




const Timeline = () => { 
    const { tasks, currentProject } = useContext(AppContext) 
    
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
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                >
                    {tasks.map(t => {
                        return t.project === currentProject &&
                            <Row>
                                <Task taskName = {t.info["taskName"]} id = {t.info["id"]} 
                                      color = {t.color}/>
                            </Row>
                    })}
                </CSSTransitionGroup>

            </TaskContainer>
            

        </TimelineContainer>
    )
}

export default Timeline