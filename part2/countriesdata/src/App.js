import React, { useState } from 'react'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const showStateTexts = [
    "No input given",
    "No country found",
    "Too many matches, Specify Another Filter",
    "display countries",
    "diplay one"
  ]
  const initial_state = { show: 0, countries: [] }
  const [showData, setShowData] = useState(initial_state)

  const showDetailInfo = (country) => {
    setShowData({
      show: 4,
      countries: [country]
    })
  }

  const filterCountries = (searchString) => {
    let querystring = `https://restcountries.eu/rest/v2/name/${searchString}`

    axios
      .get(querystring)
      .then(response => {
        let no_of_countries = response.data.length
        if (no_of_countries === 0) { console.log("empty array returned") }
        else if (no_of_countries === 1) { setShowData({ show: 4, countries: response.data }) }
        else if (no_of_countries <= 10) { setShowData({ show: 3, countries: response.data }) }
        else if (no_of_countries > 10) { setShowData({ show: 2, countries: [] }) }
      })
      .catch(err => {
        console.log(err)
        setShowData({ show: 1, countries: [] })
      })

  }

  const DisplayCountries = ({ data }) => {

    if (showData.show <= 2) {
      return (
        <div>
          {showStateTexts[showData.show]}
        </div>
      )
    }

    else if (showData.show === 3) {
      return (
        <div>
          <Countries countriesinfo={showData.countries} showDetailInfo={showDetailInfo} />
        </div>
      )
    }

    else if (showData.show === 4) {
      return (
        <div>
          <CountryInfo country={showData.countries[0]} />
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Filter</h1>
      <Filter callbackFilter={filterCountries} />
      <DisplayCountries data={showData} />
    </div>
  )
}

export default App                                           