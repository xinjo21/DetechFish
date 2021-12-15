/* import './App.css'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Home from './pages/Home'
import Data from './pages/Data'
import Scan from './pages/Scan'
import Sync from './pages/Sync'
import Map from './pages/Map'
import err404 from './pages/err404'

// function imports:
import { getTime, getDate } from './api/date'

function App() {
  const link = 'http://192.168.254.119:5000/'

  const [time, setTime] = useState(getTime())
  const [date, setDate] = useState(getDate())
  const [temp, setTemp] = useState()
  const [density, setDensity] = useState()
  const stream = link + 'video_feed'

  useEffect(() => {
    async function getTemp(){
      try {
        const res = await axios.get(link +'temperature')
          setTemp(JSON.stringify(res.data.temperature))
      } catch (err) {
        console.log(err)
      }
    }

    async function getDensity(){
      try {
        const res = await axios.get(link +'fish_count')
          setDensity(JSON.stringify(res.data.fishcount))
      } catch (err) {
        console.log(err)
      }
    }

    setInterval(() => {
      setTime(getTime)
      setDate(getDate)
      getTemp()
      getDensity()
    }, 1500)
  })


  return (
    <Router>
      <Switch>
        
        <Route exact path='/'>
          <Home time={time} date={date} link={link}/>
        </Route>

        <Route path='/data'>
          <Data/>
        </Route>

        <Route path='/scan'>
          <Scan time={time} temp={temp} stream={stream} density={density}/>
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