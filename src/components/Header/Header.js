import React, { useContext, useEffect, useState } from 'react'
import MaterialIcon from 'material-icons-react'
import { HeaderNav, ProjectSelection, CurrentProject, SettingsIcon, AddProject} from './Styles'
import { AppContext } from '../../Context'

const Header = ({ toggleAdd }) => {
    const { currentProject, setCurrentProject, projects, projectsDispatch } = useContext(AppContext)
    

    useEffect(() => {

    }, [])

    return (
        <HeaderNav>
            <ProjectSelection>
                {currentProject ? 
                <CurrentProject>
                    <MaterialIcon icon="arrow_drop_down" color="#92a1d5" size="medium" />
                    ESSAY
                </CurrentProject> : 
                <AddProject onClick = {() => toggleAdd(true)}>  
                    <span style = {{marginRight: "10px",
                                    display: "flex", 
                                    alignItems: "center"}}>
                    <MaterialIcon icon = "add" color = "#92a1d5" size = "small"/>
                    </span>
                    ADD PROJECT...
                </AddProject>
                }
                
            </ProjectSelection>
            <SettingsIcon>
                <MaterialIcon icon="format_list_bulleted" color="#92a1d5" size="medium" />
            </SettingsIcon>

        </HeaderNav>
    )
}

export default Header
