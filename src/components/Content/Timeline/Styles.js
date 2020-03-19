import styled from 'styled-components'

export const TimelineContainer = styled.div`
    height: 100%; 
    min-height: 100vh; 
    margin-top: 80px; 
    overflow-x: scroll;
    white-space: nowrap;  
    position: relative; 
`

export const TaskContainer = styled.div`
    position: absolute; 
    top: 60px; 
    width: 100%; 
    z-index: 0; 
`

export const Row = styled.div`
    width: 100%;
`