import styled from 'styled-components'

export const TaskDiv = styled.div`
    height: 35px; 
    width: ${props => props.taskWidth + "px"}; 
    background-color: #F65889;
    border-radius: 25px; 
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: flex; 
    align-items: center; 
    margin: 15px 0px 15px 0px; 
`

export const TaskItem = styled.p`
    margin: 10px 10px 10px 20px;  
    font-size: 0.9rem; 
    font-weight: bold; 
    color: #eeeeee;
`