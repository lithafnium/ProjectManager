import styled from 'styled-components'

export const OptionsDiv = styled.div`
    position: absolute; 
    width: 100px; 
    height: 80px; 
    background-color: #182249; 
    top: ${props => props.y + "px"}; 
    left:  ${props => props.x + "px"}; 
`