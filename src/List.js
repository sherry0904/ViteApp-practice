import React, {useContext, useEffect} from 'react'
import context from './context/context'
import {Link} from 'react-router-dom'

export default function List() {
    const contextValue = useContext(context);
    const {data, search, region} = contextValue;
    let filterData = data.filter(function(item,idx,arr){
        if(region === 'All' && item.name.toLowerCase().includes(search.toLowerCase())){
            return item
        }else {
            return item.region === region && item.name.toLowerCase().includes(search.toLowerCase())
        }
    });
    useEffect(()=>{
        // console.log(contextValue.data[0])
        // console.log(search)
        // console.log(region)
    });
    return (
        <div className='list'>
            {
                filterData.map((item,idx)=>{
                    return (
                        <Link to={`detail/${item.name}`} className='list__item' key={item.name}>
                            <div className='list__pic'>
                                <img loading="lazy" src={item.flags.png} alt=""/>
                            </div>
                            <div className='list__content'>
                                <h3>{item.name}</h3>
                                <p>Population: <span>{item.population}</span></p>
                                <p>Region: <span>{item.region}</span></p>
                                <p>Capital: <span>{item.capital}</span></p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
