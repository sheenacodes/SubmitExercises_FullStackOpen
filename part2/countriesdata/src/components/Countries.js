
import React from 'react'
import Country from './Country'

const Countries = ({ countriesinfo, showDetailInfo }) => {

    const filtered_countries = () =>
        countriesinfo.map((country) => {
            return <Country key={country.name}
                country={country}
                onClickShow={() => showDetailInfo(country)} />
        })
    return (
        <div>
            {filtered_countries()}
        </div>
    )
}

export default Countries