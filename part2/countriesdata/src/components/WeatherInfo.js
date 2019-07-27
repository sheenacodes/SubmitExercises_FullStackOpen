
import React, { useState, useEffect } from 'react'
import axios from 'axios'

let baseurl = 'http://api.apixu.com/v1/current.json?key=0fc4010c46eb452c833161045192707&q='

const WeatherInfo = ({ city }) => {
    const [info, setInfo] = useState({
        valid: false,
        city: city,
        temperature: 0,
        imagesrc: "",
        wind: 0
    })

    useEffect(() => {
        let querystring = `${baseurl}${city}`

        axios
            .get(querystring)
            .then(response => {
                setInfo({
                    valid: true,
                    city: response.data.location.name,
                    temperature: response.data.current.temp_c,
                    imagesrc: response.data.current.condition.icon,
                    wind: response.data.current.wind_kph
                })

            }).catch(
                setInfo({
                    valid: false,
                    city: city,
                    temperature: 0,
                    imagesrc: "",
                    wind: 0
                })
            )

    }, [city])

    const DisplayWeather = ({ info }) => {
        const errStyle = {
            color: 'red',
            fontStyle: 'italic'
        }

        if (!info.valid) {
            return (
                <div style={errStyle}>
                    Weather in {info.city} could not be retrieved
            </div>)
        }
        else {
            return (
                <div>
                    <h2>Weather in {city}</h2>
                    <li>Temperature: {info.temperature} degree celcius</li>
                    <img src={info.imagesrc} alt="flag" height="30" width="30" />
                    <li>Wind: {info.wind} kph</li>
                </div>

            )
        }
    }

    return (
        <DisplayWeather info={info} />
    )
}

export default WeatherInfo