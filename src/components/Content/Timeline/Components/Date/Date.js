import React from 'react'
import { DateOuter, DateInner, DateText, DateColors, DateLine, DateLeft, DateRight } from './Styles'

const Date = () => {
    return(
        <DateOuter>
            <DateInner>
                <DateText>March 2</DateText>
                    <DateColors>
                        <DateLine/>
                        <DateLeft/>
                        <DateRight/>
                    </DateColors>       
            </DateInner>
        </DateOuter>
    )
}

export default Date