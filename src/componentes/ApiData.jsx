import async from 'hbs/lib/async'
import React, { useState, useEffect } from 'react'
import WeatherList from './WeatherList'






function ApiData() {

    const [weathers, setWeathers] = useState({})

    // function  handleGeocoding(){

    //     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=San Francisco,CA,US&limit=1&appid=4acc831bf7e674433b6b33a5eb03b7b1`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const [{lat,lon}] = data
    //             console.log(lat,lon)
    //              handleWeather(lat , lon )
    //         })
    // }  




    async function handleWeather(lat = 37.773972, lon = -122.431297) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&appid=4acc831bf7e674433b6b33a5eb03b7b1`
        const promess = await fetch(url)
          const res = await promess.json()   
          console.log(res)
            // .then(res => { return res.json() })
            // .then(data => {
                // console.log(data)
                // setWeathers(data)
                // data.daily.map(a => { console.log(a) })
                // setWeathers(data.daily)
            // })

    }
    // function handleWeather(lat = 37.773972, lon = -122.431297) {
    //     const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=standard&appid=4acc831bf7e674433b6b33a5eb03b7b1`
    //     fetch(url)
        
    //         .then(res => { return res.json() })
    //         .then(data => {
    //             // console.log(data)
    //             // setWeathers(data)
    //             // data.daily.map(a => { console.log(a) })
    //             setWeathers(data.daily)
    //         })

    // }



    // function handleWeatherIcon(){
    //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=London`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             // setIcon(data)
    //         })
    // }
    // if (!weathers) {
    //     return null;
    //   }
    // useEffect(() => {
    //     handleWeather()
    //     // handleGeocoding()
    // }, [])

    return (
        <>
            {/* <h1> marcos</h1> */}
            <WeatherList weathers={weathers} />
            {/* data.daly.map */}
        </>
    )
}

export default ApiData