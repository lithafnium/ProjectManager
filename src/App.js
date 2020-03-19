import React, { useState } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import './App.css';
import { AppProvider } from './Context'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import ContentContainer from './components/Content/ContentContainer'
import AddProject from './AddProject'
function App() {
  const [showAdd, toggleAdd] = useState(false)
  return (
    <AppProvider>
      <div className="App">
        <Header toggleAdd = {toggleAdd} />
        <Sidebar/>
        <ContentContainer/>
        <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >
            {showAdd && <AddProject toggleAdd = {toggleAdd}/>}
        </CSSTransitionGroup>

    

      </div>
      
    </AppProvider>
  );
}

export default App;
