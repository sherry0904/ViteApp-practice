import React, {useContext, useState, useEffect, useRef } from 'react'
import context from './context/context'

export default function Filter() {
    const [openSelectStatus, setOpenSelectStatus] = useState(false);
    const searchRef = useRef();
    const contextValue = useContext(context)
    const {search, setSearch, region, setRegion, allRegion} = contextValue
    function onChangeValue(e){
        setSearch(e.target.value);
    }
    // 開啟/關閉下拉選單
    function openSelect(){
        setOpenSelectStatus(!openSelectStatus)
    }
    // 篩選區域
    function switchRegion(e){
        setRegion(e.target.getAttribute("data-region"))
        // console.log("data: "+e.target.getAttribute("data-region"))
        // console.log("refion: "+region)
        setOpenSelectStatus(!openSelectStatus)
    }
    useEffect(()=>{
        searchRef.current.focus();
        // console.log(contextValue)
    },[])

    return (
        <div className='form'>
            <input className='search' type='text' placeholder='Search for a country...' value={search} onChange={onChangeValue} ref={searchRef}/>

            <div className='select'>
                <div className='select__selected' onClick={()=>{openSelect()}}>
                    {region === 'All' ? 'Filter by Region...' : region} 
                </div>
                <div className='select__box' style={openSelectStatus?{display: 'block'}:{display:'none'}}>
                {
                    allRegion.map((item,idx)=>{
                        return <div className='select__item' key={idx} data-region={item} onClick={(e)=>{switchRegion(e)}}>{item}</div>
                    })
                }
                </div>
            </div>
        </div>
    )
}
