import React from 'react'
import { DateOuter, DateInner, DateText, DateColors, DateLine, MinorLine, DateLeft, DateRight } from './Styles'

const Date = ({ dateText }) => {
    return(
        <DateOuter>
            <DateInner>
                <DateText>March 2</DateText>
                    <DateColors>
                        <DateLine/>
                        <MinorLine left = "74"/>
                        <MinorLine left = "44"/>
                        <MinorLine left = "14"/>
                        <MinorLine left = "134"/>
                        <MinorLine left = "164"/>
                        <MinorLine left = "194"/>

                        <DateLeft/>
                        <DateRight/>
                    </DateColors>       
            </DateInner>
        </DateOuter>
    )
}

export default Date