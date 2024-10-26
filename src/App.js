import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import CallbackHome from './callback/CallbackHome'
import Home from './Home'
import RefHome from './ref/RefHome'
import UseEffectsHome from './useEffects/UseEffectsHome'
import TaskApp from './useReducerEx/TaskApp'

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <label className='themebutton'>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <div className={isDark ? 'dark' : 'light'}>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/callback" element={<CallbackHome />} />
            {/* <CallbackHome /> */}
            <Route path="/refs" element={<RefHome />} />
            {/* <RefHome /> */}
            <Route path="/useeffect" element={<UseEffectsHome />} />
            {/* <UseEffectsHome /> */}
            <Route path="/usereducer" element={<TaskApp />} />
            {/* <TaskApp /> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App