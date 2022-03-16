import React, { useContext, useMemo } from 'react'
import contextValue from '../context/context'
import {Link} from 'react-router-dom'

export default function List() {

    const {
        state: { countries, fields }
    } = useContext(contextValue);
    
    const final = useMemo(() =>
        countries
            .filter(country =>
                new RegExp(fields.search, 'gi').test(country.name)
            )
            .filter(country =>
                fields.region === 'All'
                    ? fields.region
                    : fields.region === country.region
            )
        , [countries, fields])

    return (
        <div className='list'>
            {
                final.map((item, idx) => (
                    <Link
                        key={item.name}
                        to={`detail/${item.name}`}
                        className='list__item'
                    >
                        {/* Need separate, list item should be the other Component. */}
                        <div className='list__pic'>
                            <img loading="lazy" src={item.flags?.png} alt="" />
                        </div>
                        <div className='list__content'>
                            <h3>{item.name}</h3>
                            {/*
                                    Options, p can be the other Component.
                                    e.q. <Component title={title} value={value} />
                                */}
                            <p>Population: <span>{item.population}</span></p>
                            <p>Region: <span>{item.region}</span></p>
                            <p>Capital: <span>{item.capital}</span></p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
