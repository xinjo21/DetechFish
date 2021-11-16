/* import './App.css'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Home from './pages/Home'
import Data from './pages/Data'
import Scan from './pages/Scan'
import Sync from './pages/Sync'
import Map from './pages/Map'
import err404 from './pages/err404'


function getDate() {
  const date = new Date()

  var currentDay = date.getDay()
  var currentMonth = date.getMonth()
  var currentDate = date.getDate()
  var currentYear = date.getFullYear()

  var month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  var day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  var curDate = day[currentDay] + ", " + month[currentMonth] + " " + currentDate + ", " + currentYear

  return curDate
}

function getTime() {
  const date = new Date()

  var hr = date.getHours()
  var mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  var sec = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
  
  var time
  
  if (hr > 12 || hr === 12) {
    hr = (hr !== 12 ? (hr - 12) : 12 )
    time = (hr < 10 ? '0' : '') + hr + ':' + mn + ":" + sec + " PM"
  } else if (hr === 0 || hr < 12 ) {
    hr = (hr !== 0 ? hr : 12)
    time = hr + ':' + mn + ":" + sec + " AM"
  } /* else {
    time = (hr < 10 ? '0' : '') + hr + ':' + mn + ":" + sec + " AM"
  } */
  return time
}


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