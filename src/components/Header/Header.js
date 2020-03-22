import React, { useContext, useEffect, useState, useRef } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import MaterialIcon from 'material-icons-react'
import {
    HeaderNav,
    ProjectSelection,
    CurrentProject,
    SettingsIcon,
    AddProject,
    ProjectDropdown,
    Project,
    AddProjectDropdown,
    AddTask, 
    ProjectSelectorTaskButton,
} from './Styles'
import { AppContext } from '../../Context'

const Header = ({ toggleAdd, toggleTask }) => {
    const { currentProject, setCurrentProject, projects } = useContext(AppContext)
    const [showDropdown, toggleDropdown] = useState(false)
    const wrapperRef = useRef(null)


    const handleClickOutside = e => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            toggleDropdown(false)
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    const updateCurrent = (id) => {
        setCurrentProject(id)
        toggleDropdown(false)
    }

    return (
        <HeaderNav>
            <ProjectSelectorTaskButton>
                <AddTask onClick = {() => toggleTask(true)}>
                    Add Task
                </AddTask>
                <ProjectSelection ref = {wrapperRef} >
                    {currentProject ?
                        <CurrentProject onClick={() => toggleDropdown(true)}>
                            <MaterialIcon icon="arrow_drop_down" color="#92a1d5" size="medium" />
                            {projects.find(p => p.id === currentProject).projectName}
                        </CurrentProject> :
                        <AddProject onClick={() => toggleAdd(true)}>
                            <span style={{
                                marginRight: "10px",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <MaterialIcon icon="add" color="#92a1d5" size="small" />
                            </span>
                        ADD PROJECT...
                    </AddProject>
                    }
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={200}
                    >
                        {
                            showDropdown &&
                            <ProjectDropdown>
                                <Project onClick={() => toggleDropdown(false)}>
                                    <MaterialIcon icon="arrow_drop_down" color="#302d46" size="medium" />
                                    <p>{projects.find(p => p.id === currentProject).projectName}</p>
                                </Project>
                                {projects.map((p) => {
                                    return p.id !== currentProject &&
                                        <Project onClick={() => updateCurrent(p.id)}>
                                            <MaterialIcon icon="arrow_drop_down" color="#302d46" size="medium" />
                                            <p>{p.projectName}</p>
                                        </Project>
                                })}
                                <AddProjectDropdown onClick = {() => toggleAdd(true)}>
                                    <MaterialIcon icon="add" color="#302d46" size="medium" />
                                    <p>Add Project...</p>
                                </AddProjectDropdown>
                            </ProjectDropdown>
                        }
                    </CSSTransitionGroup>


                </ProjectSelection>
            </ProjectSelectorTaskButton>
            <SettingsIcon>
                <MaterialIcon icon="format_list_bulleted" color="#92a1d5" size="medium" />
            </SettingsIcon>

        </HeaderNav>
    )
}

export default Header
