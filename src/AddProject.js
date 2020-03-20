import React, { useState, useContext } from 'react'
import { AppContext, ADD_PROJECT } from './Context'
import nanoid from 'nanoid'

const AddProject = ({ toggleAdd }) => {
    const [projectName, changeName] = useState('')
    const [startDay, changeStartDay] = useState('')
    const [startMonth, changeStartMonth] = useState('')
    const [startYear, changeStartYear] = useState('')
    const [endDay, changeEndDay] = useState('')
    const [endMonth, changeEndMonth] = useState('')
    const [endYear, changeEndYear] = useState('')

    const { setCurrentProject, projectsDispatch } = useContext(AppContext)

    const onDateChange = e => {
        const id = e.target.id
        const regex = /^[0-9\b]+$/
        if (e.target.value === '' || regex.test(e.target.value)) {
            // eslint-disable-next-line default-case
            switch (id) {
                case "startmonth":
                    changeStartMonth(e.target.value)
                    break
                case "startday":
                    changeStartDay(e.target.value)
                    break;
                case "startyear":
                    changeStartYear(e.target.value)
                    break;
                case "endmonth":
                    changeEndMonth(e.target.value)
                    break
                case "endday":
                    changeEndDay(e.target.value)
                    break;
                case "endyear":
                    changeEndYear(e.target.value)
                    break;
            }
        }
    }

    const addProject = () => {
        // projectsDispatch({ action: ADD_PROJECT})
        const startDate = new Date(startYear, startMonth, startDay)
        const endDate = new Date(endYear, endMonth, endDay)
        const id = nanoid()
        setCurrentProject(id) 
        projectsDispatch({ action: ADD_PROJECT, payload: {id, projectName, startDate, endDate}})
        toggleAdd(false)
    }
 
    return (
        <div className="AddContainer">
            <h2>Add Project</h2>
            <input placeholder="Project Name..." className="projectName" 
                onChange = {e => changeName(e.target.value)}></input>
            <div className="inputDates">
                <div>
                    <p className="dateType">From:</p>
                    <div className="startDate">
                        <input id="startmonth" className="dateInput" maxlength="1" type="text"
                            value={startMonth} onChange={e => onDateChange(e)} />
                        <p className="slash">/</p>
                        <input id="startday" className="dateInput" maxlength="1" type="text"
                            value={startDay} onChange={e => onDateChange(e)} />
                        <p className="slash">/</p>
                        <input id="startyear" className="yearInput" maxlength="4" type="text"
                            value={startYear} onChange={e => onDateChange(e)} />
                    </div>
                </div>
                <div>
                    <p className="dateType">To:</p>
                    <div className="startDate">
                        <input id="endmonth" className="dateInput" maxlength="1" type="text"
                            value={endMonth} onChange={e => onDateChange(e)} />
                        <p className="slash">/</p>
                        <input id="endday" className="dateInput" maxlength="1" type="text"
                            value={endDay} onChange={e => onDateChange(e)} />
                        <p className="slash">/</p>
                        <input id="endyear" className="yearInput" maxlength="4" type="text"
                            value={endYear} onChange={e => onDateChange(e)} />
                    </div>
                </div>
            </div>
            <button className="addProject" onClick={() => addProject()}>Add Project</button>
            <button className="cancel" onClick = {() => toggleAdd(false)}>Cancel</button>
        </div>
    )
}

export default AddProject