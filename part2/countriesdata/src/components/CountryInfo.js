
import React from 'react'
import WeatherInfo from './WeatherInfo'

const CountryInfo = ({ country }) => {

  const languages = (langs) => langs.map(element => <li key={element.name}>{element.name}</li>)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      {languages(country.languages)}
      <img src={country.flag} alt="flag" height="60" width="100" />
      <WeatherInfo city={country.capital} />
    </div>
  )
}

export default CountryInfo