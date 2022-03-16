import React, { useContext } from 'react'
import contextValue from '../context/context'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Detail() {

    const {
        state: { countries }
    } = useContext(contextValue);

    const { name } = useParams();

    const country = countries.find(country => country.name === name)

    const borderCountries =
        countries.reduce((prev, current) => {
            if (
                country.subregion === current.subregion
                && country.name !== current.name
            ) {
                return prev = prev.concat(current.name);
            }

            return prev;

        }, [])

    return (
        <div className='detail'>
            <Link to="/" className='btn detail__back'>Back</Link>
            <div className='detail__container'>
                <div className='detail__flag'>
                    <img src={country.flags.png} alt={`${country.name} flag`} />
                </div>
                <div className='detail__content'>
                    <h3 className='detail__name'>{country.name}</h3>
                    {
                        Object.entries({
                            'Native Name': country.nativeName,
                            'Population': country.population,
                            'Region': country.region,
                            'Subregion': country.subregion,
                            'Capital': country.capital

                        }).map(([key, value], idx) => (
                            <p key={idx}>{key} : <span>{value }</span></p>
                        ))
                    }
                    <br/>
                    <br/>
                    {
                        Object.entries({
                            'Top Level Domain': country.topLevelDomain.toString(),
                            'Languages': country.languages.map(item => item.name).toString(),
                            'Currencies': country.currencies.map(item => item.code).toString()

                        }).map(([key, value], idx) => (
                            <p key={idx}>{key} : <span>{value}</span></p>
                        ))
                    }
                    <br/>
                    <div className='detail__border'>
                        <p>Border Countries:</p>
                        {
                            borderCountries.map((country,idx)=>(
                                <Link to={`/detail/${country}`} key={idx} className='btn detail__btn'>{country}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
