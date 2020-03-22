import React, { useReducer, useEffect, useState } from 'react'
import nanoid from 'nanoid'

export const AppContext = React.createContext()

// Projects
export const ADD_PROJECT = 'ADD_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'

// Tasks
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'

// Tod-o
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'

const projectsReducer = (prevState, { action, payload }) => {
    switch (action) {
        case (ADD_PROJECT):
            return [...prevState, {
                id: payload.id,
                projectName: payload.projectName, 
                startDate: payload.startDate, 
                endDate: payload.endDate
            }]
        case (DELETE_PROJECT):
            return prevState.filter(({info}) => info.id !== payload)
        case (EDIT_PROJECT):
            return prevState.map(
                ({ id, ...rest }) => (id === payload.id
                    ? ({ ...payload, ...rest }) : ({ id, ...rest })),
            )
        default:
            return prevState
    }
}

const tasksReducer = (prevState, { action, payload }) => {
    switch (action) {
        case (ADD_TASK):
            return [...prevState, {
                project: payload.currentProject,
                info: {
                    id: payload.id,
                    taskName: payload.taskName,
                    startDate: payload.startDate,
                    endDate: payload.endDate,
                },
                color: payload.color,
            }]        
        case (DELETE_TASK):
            return prevState.filter(({ id }) => id !== payload)
        case (EDIT_TASK):
            return prevState.map(
                (t) => (t.info.id === payload.id
                    ? ({ ...t, ...payload }) : (t)),
            )
        default:
            return prevState
    }
}


const todosReducer = (prevState, { action, payload }) => {

}


export const AppProvider = ({ children }) => {
    const [projects, projectsDispatch] = useReducer(projectsReducer, null,
        () => JSON.parse(localStorage.getItem('projects')) || [])

    const [tasks, tasksDispatch] = useReducer(tasksReducer, null,
        () => JSON.parse(localStorage.getItem('tasks')) || [])

    const [todos, todosDispatch] = useReducer(todosReducer, null,
        () => JSON.parse(localStorage.getItem('todos')) || [])

    const [currentProject, setCurrentProject] = useState(null)

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects))
        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [projects, tasks, todos])

    useEffect(() => {
        if (projects.length !== 0) {
            console.log(localStorage.getItem('projects'))
            setCurrentProject(projects[0].id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <AppContext.Provider value={{
            projects,
            tasks,
            todos,
            currentProject,
            projectsDispatch,
            tasksDispatch,
            todosDispatch,
            setCurrentProject,
        }}>
            {children}
        </AppContext.Provider>

    )
}