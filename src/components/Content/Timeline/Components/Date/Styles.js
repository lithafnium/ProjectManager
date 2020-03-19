import styled from 'styled-components'

export const DateOuter = styled.div`
    height: 100%; 
    width: 210px; 
    display: inline-block; 
`

export const DateInner = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
`

export const DateText = styled.p`
    color: #92a1d5;
`

export const DateColors = styled.div`
    border-top: 1px solid #92a1d5;
    display: flex;
    position: relative; 
`

export const DateLeft = styled.div`
    height: 100vh; 
    width: 105px; 
    background-color: #2f2d52;
`
export const DateRight = styled.div`
    height: 100vh; 
    width: 105px; 
    background-color: #2B2950;
`

export const DateLine = styled.p`
    margin: 0px; 
    position: absolute;
    left: 104px; 
    width: 1px; 
    height: 10px; 
    background-color: #92a1d5
`
