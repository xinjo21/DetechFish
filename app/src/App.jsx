/* import './App.css'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Home from './pages/Home'
import Data from './pages/Data'
import Scan from './pages/Scan'
import Sync from './pages/Sync'
import Map from './pages/Map'
import err404 from './pages/err404'

// function imports:
import { getTime, getDate } from './functions/date'

function App() {
  const [time, setTime] = useState(getTime())
  const [date, setDate] = useState(getDate())

  useEffect(() => {
    setInterval(() => {
      setTime(getTime)
      setDate(getDate)
    }, 1000)
  }, [])


  return (
    <Router>
      <Switch>
        
        <Route exact path='/'>
          <Home time={time} date={date}/>
        </Route>

        <Route path='/data'>
          <Data/>
        </Route>

        <Route path='/scan'>
          <Scan time={time}/>
        </Route>

        <Route path='/map'>
          <Map time={time}/>
        </Route>

        <Route exact path='/sync'>
          <Sync/>
        </Route>

        <Route render={err404}/>

        {/* <Route path='/' exact component={Home}/>
        <Route path='/data' component={Data}/>
        <Route path='/scan' component={Scan}/>
        <Route path='/sync' component={Sync}/>
        <Route path='/map' component={Map}/>
        <Route render={err404}/> */}
      </Switch>
    </Router>

  );
}

export default App;