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
   
    height: 35px; 
    width: 25%; 
    border-radius: 2px; 
    border: 1px solid #92a1d5;
    margin-left: 280px; 
    display: flex; 
    align-items: center; 
    transition: 0.2s; 

    &:hover{
        background-color: #59566A; 
        border: 1px solid #59566A;
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

