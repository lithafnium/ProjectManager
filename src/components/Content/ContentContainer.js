import React from 'react'
import { Container } from './Styles'
import Calendar from './Calendar/Calendar'
import Timeline from './Timeline/Timeline'

const ContentContainer = () => {
    return(
        <Container>
            <Timeline/>
        </Container>
    )
}

export default ContentContainer