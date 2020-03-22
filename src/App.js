import React, { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import './App.css';
import { AppProvider } from './Context'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import ContentContainer from './components/Content/ContentContainer'
import AddProject from './AddProject'
import AddTask from './AddTask'
import { OptionsDiv } from './Styles'
function App() {
  const [showAdd, toggleAdd] = useState(false)
  const [showTask, toggleTask] = useState(false)
  return (
    <AppProvider>
      <div className="App">
        <Header toggleAdd = {toggleAdd} toggleTask = {toggleTask} />
        <Sidebar/>
        <ContentContainer/>
        <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >
            {showAdd && <AddProject toggleAdd = {toggleAdd}/>}
            {showTask && <AddTask toggleTask = {toggleTask}/>}
        </CSSTransitionGroup>

    

      </div>
      
    </AppProvider>
  );
}

export default App;
