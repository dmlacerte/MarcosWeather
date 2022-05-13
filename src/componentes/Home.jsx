import React from 'react'
import './Home.css'
import ApiData from './ApiData'

// tranformando DAY 
// const newDay = new Date(dayOne * 1000).getDay()
//     console.log({newDay})
//     let options = { weekday: 'short'};
//     console.log({options})
//     const firstDay = new Intl.DateTimeFormat('en-US', options).format(newDay);
//     console.log({firstDay})

function Home() {
  return (
    <div className="home">
      {/* <form onSubmit={handleSubmit}> */}
      <form className="form" >
        <label htmlFor="issueType">State</label>
        <select id="issueType">
          <option value="outage">Service Outage</option>
        </select>

        <label htmlFor="subject">City</label>
        <select id="issueType">
          <option value="outage">Service Outage</option>
        </select>
    
        <button type="submit">Send</button>
      </form>
      <ApiData/>
    </div>
  )
}


export default Home