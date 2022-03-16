import React, {
    useContext,
    useState,
    useEffect,
    useCallback
} from 'react'
import contextValue from '../context/context'

export default function Filter() {
    const [dropDownToggle, setDropDownToggle] = useState(false);

    const {
        state: { fields, region },
        action: { setFields }
    } = useContext(contextValue);

    const inputChangeHandler = useCallback(({ target }) => {

        setFields(prev => ({...prev, search: target.value }));

    }, [])

    const filterChangeHandler = useCallback(r => _ => {

        if (r === region) return;

        setFields(prev => ({ ...prev, region: r }));
    }, [])

    useEffect(() => {

        setDropDownToggle(false);

    }, [fields.region]);

    return (
        <div className='form'>
            {/* Need separate, input should be the other Component. */}
            <input
                className='search'
                type='text'
                placeholder='Search for a country...'
                value={fields.search}
                onChange={inputChangeHandler}
            />
            {/* Need separate, select should be the other Component. */}
            <div className='select'>
                <div
                    className='select__selected'
                    onClick={() => setDropDownToggle((prev) => !prev)}
                >
                    {
                        fields.region === 'All'
                            ? 'Filter by Region...'
                            : fields.region 
                    } 
                </div>
                <div
                    className='select__box'
                    style={{ display: dropDownToggle ? 'block' : 'none' }}
                >
                {
                    region.map((item,idx) => (
                        <div
                            className='select__item'
                            key={idx}
                            onClick={filterChangeHandler(item)}
                        >
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
