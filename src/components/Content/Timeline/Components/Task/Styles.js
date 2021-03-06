import styled from 'styled-components'

export const TaskItem = styled.p`
    margin: 10px 10px 10px 20px;  
    font-size: 0.9rem; 
    font-weight: bold; 
    color: #eeeeee;
`

export const OptionsDiv = styled.div`
    position: absolute; 
    width: 150px; 
    height: 80px; 
    background-color: #182249; 
    left: ${props => props.x - 355+ "px"}; 
    top: ${props => props.y - 150 +"px"}; 
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 3px; 
    z-index: 100; 
    padding: 15px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`

export const Delete = styled.div`
    display: flex; 
    align-items: center; 
    width: 100%; 
    height: 50%; 
    transition: 0.15s; 

    & p{
        margin: 0px; 
        color: #92a1d5; 
    }

    &:hover{
        opacity: 0.6;
        cursor: pointer;  
    }
`

export const Divider = styled.hr`
    width: 100%; 
    color: #92a1d5; 
    border-width: 0.3px;
    border: 0.5px solid #92a1d5; 
`

export const ColorPicker = styled.div`
    display: flex; 
    justify-content: center; 
    height: 50%; 
    width: 100%; 
    margin-top: 10px; 
`

export const Color = styled.p`
    margin: 0px 5px 0px 5px; 
    width: 18px; 
    height: 18px; 
    border-radius: 50%; 
    background-color: ${props => props.color}; 
    transition: 0.2s; 

    &:hover{
        width: 20px; 
        height: 20px; 
        cursor: pointer; 
    }

`