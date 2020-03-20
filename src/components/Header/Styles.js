import styled from 'styled-components'

export const HeaderNav = styled.header`
    position: fixed;
    background-color: #182249;
    width: 100%; 
    height: 70px; 
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    z-index: 10; 
`

export const ProjectSelection = styled.div`
    position: relative; 
    height: 35px; 
    width: 25%; 
    border-radius: 2px; 
    /* border: 1px solid #92a1d5; */
    margin-left: 280px; 
    display: flex; 
    align-items: center; 
    transition: 0.2s; 

    &:hover{
        background-color: #59566A; 
        cursor: pointer; 
    }

`

export const CurrentProject = styled.p`
    margin-left: 15px; 
    color: #92a1d5;
    display: flex; 
    align-items: center;     
`

export const AddProject = styled.p`
    margin-left: 15px; 
    width: 100%; 
    color: #92a1d5;
    display: flex; 
    align-items: center;    
`

export const SettingsIcon = styled.span`
    margin-right: 50px; 

    &:hover{
        cursor: pointer; 
    }
`

export const ProjectDropdown = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    background-color: #302d46; 
    border: 1px solid #302d46; 
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const Project = styled.div`
    width: 100%; 
    height: 40px;
    display: flex; 
    align-items: center;  
    transition: 0.2s; 


    & p {
        margin: 0px; 
        color: #eeeeee; 
    }

    &:hover{
        background-color: #59566A; 
    }
`

export const AddProjectDropdown = styled.div`
    width: 100%; 
    height: 35px;
    display: flex; 
    align-items: center;  
    transition: 0.2s; 

    & p {
        margin: 0px; 
        color: #eeeeee; 
    }

    &:hover{
        background-color: #59566A; 
    }
`

