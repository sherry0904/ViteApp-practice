import React, {useContext,useEffect} from 'react'
import context from './context/context'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Detail() {
    const contextValue = useContext(context);
    const data = contextValue.data
    const {name} = useParams();
    const country = data.filter(item=>{
        return item.name === name
    })
    const countryData = country[0]
    const borderCountries = data
    .filter(item=>item.subregion === countryData.subregion)
    .map(item=>item.name).filter(item=>item !== countryData.name)

    useEffect(()=>{
        // console.log(
        //     Object.entries(countryData.languages)
        // )
        // console.log(country)
    })
    return (
        <div className='detail'>
            <Link to="/" className='btn detail__back'>Back</Link>
            <div className='detail__container'>
                <div className='detail__flag'>
                    <img src={countryData.flags.png} alt={`${countryData.name} flag`} />
                </div>
                <div className='detail__content'>
                    <h3 className='detail__name'>{countryData.name}</h3>
                    <p>Native Name : <span>{countryData.nativeName}</span></p>
                    <p>Population : <span>{countryData.population}</span></p>
                    <p>Region : <span>{countryData.region}</span></p>
                    <p>Subregion : <span>{countryData.subregion}</span></p>
                    <p>Capital : <span>{countryData.capital}</span></p>
                    <br/>
                    <br/>
                    <p>Top Level Domain : <span>{countryData.topLevelDomain.toString()}</span></p>
                    <p>Languages : 
                        <span>
                            {
                                countryData.languages.map(item=>item.name).toString()
                            }
                        </span>
                    </p>
                    <p>Currencies : 
                    <span>
                            {
                                countryData.currencies.map(item=>item.code).toString()
                            }
                        </span>
                    </p>
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
